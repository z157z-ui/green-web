import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { projects } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const project = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (project.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    return NextResponse.json(project[0], { status: 200 });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('GET error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const { id } = await params;
    
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: Partial<typeof projects.$inferInsert> = {};

    if (body.title !== undefined) {
      const title = body.title.trim();
      if (!title) {
        return NextResponse.json(
          { error: 'Title cannot be empty', code: 'INVALID_TITLE' },
          { status: 400 }
        );
      }
      updates.title = title;
    }

    if (body.description !== undefined) {
      const description = body.description.trim();
      if (!description) {
        return NextResponse.json(
          { error: 'Description cannot be empty', code: 'INVALID_DESCRIPTION' },
          { status: 400 }
        );
      }
      updates.description = description;
    }

    if (body.category !== undefined) {
      const category = body.category.trim();
      if (!category) {
        return NextResponse.json(
          { error: 'Category cannot be empty', code: 'INVALID_CATEGORY' },
          { status: 400 }
        );
      }
      updates.category = category;
    }

    if (body.location !== undefined) {
      const location = body.location.trim();
      if (!location) {
        return NextResponse.json(
          { error: 'Location cannot be empty', code: 'INVALID_LOCATION' },
          { status: 400 }
        );
      }
      updates.location = location;
    }

    if (body.year !== undefined) {
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
      updates.year = year;
    }

    if (body.featuredImage !== undefined) {
      const featuredImage = body.featuredImage.trim();
      if (!featuredImage) {
        return NextResponse.json(
          { error: 'Featured image cannot be empty', code: 'INVALID_FEATURED_IMAGE' },
          { status: 400 }
        );
      }
      updates.featuredImage = featuredImage;
    }

    if (body.galleryImages !== undefined) {
      if (!Array.isArray(body.galleryImages)) {
        return NextResponse.json(
          { error: 'Gallery images must be an array', code: 'INVALID_GALLERY_IMAGES' },
          { status: 400 }
        );
      }
      const sanitizedGallery = body.galleryImages
        .filter((img: unknown) => typeof img === 'string')
        .map((img: string) => img.trim())
        .filter((img: string) => img.length > 0);
      updates.galleryImages = sanitizedGallery as any;
    }

    if (body.status !== undefined) {
      const status = body.status.trim();
      if (status !== 'published' && status !== 'draft') {
        return NextResponse.json(
          { error: 'Status must be "published" or "draft"', code: 'INVALID_STATUS' },
          { status: 400 }
        );
      }
      updates.status = status;
    }

    updates.updatedAt = new Date().toISOString();

    const updatedProject = await db
      .update(projects)
      .set(updates)
      .where(eq(projects.id, parseInt(id)))
      .returning();

    return NextResponse.json(updatedProject[0], { status: 200 });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('PUT error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth.api.getSession({ headers: request.headers });
    
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const { id } = await params;
    
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        { error: 'Valid ID is required', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    const existingProject = await db
      .select()
      .from(projects)
      .where(eq(projects.id, parseInt(id)))
      .limit(1);

    if (existingProject.length === 0) {
      return NextResponse.json(
        { error: 'Project not found', code: 'PROJECT_NOT_FOUND' },
        { status: 404 }
      );
    }

    const deletedProject = await db
      .delete(projects)
      .where(eq(projects.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Project deleted successfully',
        project: deletedProject[0],
      },
      { status: 200 }
    );
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('DELETE error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}