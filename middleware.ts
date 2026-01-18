import { NextRequest, NextResponse } from "next/server";
import { refreshSession, decrypt, SESSION_COOKIE_NAME } from "@/lib/auth";

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per minute

function rateLimit(ip: string): boolean {
  const now = Date.now();

  // Memory safety: Clear store if it gets too large (DoS protection)
  if (rateLimitStore.size > 10000) {
    rateLimitStore.clear();
  }

  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  // Admin Auth Protection
  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    const cookie = request.cookies.get(SESSION_COOKIE_NAME);
    let isAuthenticated = false;

    if (cookie) {
      try {
        await decrypt(cookie.value);
        isAuthenticated = true;
      } catch (e) {
        // Invalid token
      }
    }

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    // Refresh session if authenticated
    const res = await refreshSession(request);
    if (res) response = res;
  }


  // Get client IP for rate limiting (handle X-Forwarded-For properly)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = (request as any).ip ||
    (forwardedFor ? forwardedFor.split(',')[0].trim() : null) ||
    "unknown";

  // Apply rate limiting
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // Security Headers
  response.headers.set("X-DNS-Prefetch-Control", "on");
  // ... rest of headers (checking only the part I usually show in replace, but replace_file_content needs context)
  // I will just replace the top part to fix imports and usage.

  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  // Improved Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' https://cdn.jsdelivr.net 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https:;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  response.headers.set("Content-Security-Policy", cspHeader);

  // Secure CORS - Only allow specific origins
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin");
    const allowedOrigins = [
      process.env.NEXT_PUBLIC_SITE_URL,
      'https://greenbuildersandinteriors.com',
      'https://www.greenbuildersandinteriors.com',
    ].filter(Boolean) as string[];

    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set("Access-Control-Allow-Credentials", "true");
    } else if (process.env.NODE_ENV === 'development') {
      // Allow localhost in development only
      response.headers.set("Access-Control-Allow-Origin", origin || "*");
    }

    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    response.headers.set("Access-Control-Max-Age", "86400");

    // Handle preflight requests
    if (request.method === "OPTIONS") {
      return new NextResponse(null, { status: 200, headers: response.headers });
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/api/:path*",
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};