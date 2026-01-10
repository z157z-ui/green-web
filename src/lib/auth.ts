import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = "secret-key-change-me-in-prod"; // TODO: Move to env var
const key = new TextEncoder().encode(secretKey);

export const SESSION_COOKIE_NAME = "admin_session";

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(email: string) {
  // Verify credentials... (handled in API route)
  // Create the session
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
  const session = await encrypt({ email, expires });

  // Save the session in a cookie
  (await cookies()).set(SESSION_COOKIE_NAME, session, {
    expires,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function logout() {
  // Destroy the session
  (await cookies()).delete(SESSION_COOKIE_NAME);
}

export async function getSession() {
  const session = (await cookies()).get(SESSION_COOKIE_NAME)?.value;
  if (!session) return null;
  try {
    return await decrypt(session);
  } catch (error) {
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: SESSION_COOKIE_NAME,
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
  return res;
}
