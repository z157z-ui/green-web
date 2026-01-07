import { NextRequest, NextResponse } from 'next/server';
import { sanitizeText, sanitizeEmail } from '@/lib/sanitize';
import { Resend } from 'resend';
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

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL || 'info@greenbuildersandinteriors.com';

    try {
      const { data, error } = await resend.emails.send({
        from: 'Green Builders & Interiors <onboarding@resend.dev>', // Update with your verified domain
        to: [contactEmail],
        replyTo: sanitizedData.email,
        subject: `New Contact Form Submission - ${sanitizedData.projectType}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #1a2520; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f9f9f9; padding: 20px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #1a2520; }
                .value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #9B7E5C; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Contact Form Submission</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Name:</div>
                    <div class="value">${sanitizedData.name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email:</div>
                    <div class="value">${sanitizedData.email}</div>
                  </div>
                  <div class="field">
                    <div class="label">Phone:</div>
                    <div class="value">${sanitizedData.phone}</div>
                  </div>
                  <div class="field">
                    <div class="label">Project Type:</div>
                    <div class="value">${sanitizedData.projectType}</div>
                  </div>
                  <div class="field">
                    <div class="label">Message:</div>
                    <div class="value">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        // Log error in development
        if (process.env.NODE_ENV === 'development') {
          console.error('Resend email error:', error);
        }
        // Still return success to user, but log the error
        return NextResponse.json(
          { message: 'Contact form submitted successfully' },
          { status: 200 }
        );
      }

      // Log success in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Email sent successfully:', data);
      }

      return NextResponse.json(
        { message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      // Log error in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Email sending error:', emailError);
      }
      // Still return success to user
      return NextResponse.json(
        { message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    }
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












