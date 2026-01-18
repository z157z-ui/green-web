import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

/**
 *  SESSION CONFIG
 */
export const SESSION_COOKIE_NAME = "admin_session";

const secret = process.env.ADMIN_SESSION_SECRET;
if (!secret) {
  throw new Error("ADMIN_SESSION_SECRET is not set");
}

const key = new TextEncoder().encode(secret);

/**
 *  Create signed JWT session
 */
export async function encrypt(payload: Record<string, any>) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

/**
 *  Verify and decode session
 */
export async function decrypt(token: string) {
  const { payload } = await jwtVerify(token, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

/**
 *  LOGIN — creates secure session cookie
 */
export async function login(email: string) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

  const sessionToken = await encrypt({
    email,
    exp: Math.floor(expires.getTime() / 1000),
  });

  (await cookies()).set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    expires,
  });
}

/**
 *  LOGOUT — destroys session
 */
export async function logout() {
  (await cookies()).set(SESSION_COOKIE_NAME, "", {
    path: "/",
    expires: new Date(0),
  });
}

/**
 *  Get current session (server-side)
 */
export async function getSession() {
  const token = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    return await decrypt(token);
  } catch {
    return null;
  }
}

/**
 *  Refresh session expiry (optional, for middleware use)
 */
export async function refreshSession(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const payload = await decrypt(token);

    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
    const refreshedToken = await encrypt({
      email: payload.email,
      exp: Math.floor(expires.getTime() / 1000),
    });

    const res = NextResponse.next();
    res.cookies.set(SESSION_COOKIE_NAME, refreshedToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      expires,
    });

    return res;
  } catch {
    return null;
  }
}
