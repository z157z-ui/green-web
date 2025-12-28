import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { auth } from '@/lib/auth';

// GET all projects
export async function GET() {
  try {
    const allProjects = await db.select().from(projects);
    return NextResponse.json(allProjects, { status: 200 });
  } catch (error) {
    // Log error server-side only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('GET all projects error:', error);
    }
    // Don't expose internal error details
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}

// POST - Create new project
export async function POST(request: NextRequest) {
  try {
    // Check request body size (1MB limit)
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 1024 * 1024) {
      return NextResponse.json(
        { error: 'Request too large', code: 'PAYLOAD_TOO_LARGE' },
        { status: 413 }
      );
    }

    const session = await auth.api.getSession({ headers: request.headers });

    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.title.trim()) {
      return NextResponse.json(
        { error: 'Title is required', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!body.description || !body.description.trim()) {
      return NextResponse.json(
        { error: 'Description is required', code: 'MISSING_DESCRIPTION' },
        { status: 400 }
      );
    }

    if (!body.category || !body.category.trim()) {
      return NextResponse.json(
        { error: 'Category is required', code: 'MISSING_CATEGORY' },
        { status: 400 }
      );
    }

    if (!body.location || !body.location.trim()) {
      return NextResponse.json(
        { error: 'Location is required', code: 'MISSING_LOCATION' },
        { status: 400 }
      );
    }

    if (!body.year) {
      return NextResponse.json(
        { error: 'Year is required', code: 'MISSING_YEAR' },
        { status: 400 }
      );
    }

    const year = parseInt(body.year);
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1900 || year > currentYear + 5) {
      return NextResponse.json(
        {
          error: `Year must be between 1900 and ${currentYear + 5}`,
          code: 'INVALID_YEAR',
        },
        { status: 400 }
      );
    }

    if (!body.featuredImage || !body.featuredImage.trim()) {
      return NextResponse.json(
        { error: 'Featured image is required', code: 'MISSING_FEATURED_IMAGE' },
        { status: 400 }
      );
    }

    // Sanitize gallery images
    let galleryImages: string[] = [];
    if (body.galleryImages) {
      if (!Array.isArray(body.galleryImages)) {
        return NextResponse.json(
          { error: 'Gallery images must be an array', code: 'INVALID_GALLERY_IMAGES' },
          { status: 400 }
        );
      }
      galleryImages = body.galleryImages
        .filter((img: unknown) => typeof img === 'string')
        .map((img: string) => img.trim())
        .filter((img: string) => img.length > 0);
    }

    const status = body.status === 'draft' ? 'draft' : 'published';

    const newProject = await db
      .insert(projects)
      .values({
        title: body.title.trim(),
        description: body.description.trim(),
        category: body.category.trim(),
        location: body.location.trim(),
        year,
        featuredImage: body.featuredImage.trim(),
        galleryImages: galleryImages as any,
        status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      .returning();

    return NextResponse.json(newProject[0], { status: 201 });
  } catch (error) {
    // Log error server-side only in development
    if (process.env.NODE_ENV === 'development') {
      console.error('POST error:', error);
    }
    // Don't expose internal error details
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}