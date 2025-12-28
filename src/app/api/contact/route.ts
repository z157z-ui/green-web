import { NextRequest, NextResponse } from 'next/server';
import { sanitizeText, sanitizeEmail } from '@/lib/sanitize';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(10).max(20),
  projectType: z.string().min(1),
  message: z.string().min(10).max(2000),
});

// Maximum request body size (1MB)
const MAX_BODY_SIZE = 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    // Check request body size
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: 'Request too large', code: 'PAYLOAD_TOO_LARGE' },
        { status: 413 }
      );
    }

    const body = await request.json();

    // Validate with Zod
    const validated = contactSchema.parse(body);

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeText(validated.name),
      email: sanitizeEmail(validated.email),
      phone: sanitizeText(validated.phone),
      projectType: sanitizeText(validated.projectType),
      message: sanitizeText(validated.message),
    };

    // TODO: In production, integrate with email service (SendGrid, Resend, etc.)
    // For now, just return success
    // Example: await sendEmail(sanitizedData);

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    // Log error server-side only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error);
    }

    // Don't expose internal error details
    return NextResponse.json(
      { error: 'Failed to process request', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}












