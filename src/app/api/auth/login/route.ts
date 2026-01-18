import { NextResponse } from "next/server";
import { login } from "@/lib/auth";
import { z } from "zod";
import { timingSafeEqual } from "crypto";
import { timingSafeEqual } from "crypto";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate input
        const result = loginSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const { email, password } = result.data;

        const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
            console.error("Missing admin credentials in environment variables");
            return NextResponse.json({ error: "Configuration error" }, { status: 500 });
        }

        // Use constant-time comparison to prevent timing attacks
        const encoder = new TextEncoder();
        const a = encoder.encode(email);
        const b = encoder.encode(ADMIN_EMAIL);
        const c = encoder.encode(password);
        const d = encoder.encode(ADMIN_PASSWORD);

        // Check if lengths match first (timing safe equal throws if lengths differ)
        // Note: Length check leakage is acceptable here as email/pass are specific inputs
        if (a.length === b.length && c.length === d.length &&
            crypto.timingSafeEqual(a, b) && crypto.timingSafeEqual(c, d)) {
            await login(email);
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
