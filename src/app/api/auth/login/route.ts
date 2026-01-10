import { NextResponse } from "next/server";
import { login } from "@/lib/auth";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // TODO: Replace with secure password check (bcrypt/argon2) and database lookup
        // Hardcoded credentials for initial implementation as requested
        const ADMIN_EMAIL = "admin@example.com";
        const ADMIN_PASSWORD = "password123"; // User MUST change this

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            await login(email);
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
