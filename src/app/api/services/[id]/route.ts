import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { services } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    // Validate ID
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        { 
          error: 'Valid ID is required',
          code: 'INVALID_ID' 
        },
        { status: 400 }
      );
    }

    // Fetch service
    const service = await db.select()
      .from(services)
      .where(eq(services.id, parseInt(id)))
      .limit(1);

    if (service.length === 0) {
      return NextResponse.json(
        { 
          error: 'Service not found',
          code: 'SERVICE_NOT_FOUND' 
        },
        { status: 404 }
      );
    }

    return NextResponse.json(service[0], { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
      return NextResponse.json(
        { 
          error: 'Authentication required',
          code: 'UNAUTHORIZED' 
        },
        { status: 401 }
      );
    }

    const id = params.id;

    // Validate ID
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        { 
          error: 'Valid ID is required',
          code: 'INVALID_ID' 
        },
        { status: 400 }
      );
    }

    // Check if service exists
    const existingService = await db.select()
      .from(services)
      .where(eq(services.id, parseInt(id)))
      .limit(1);

    if (existingService.length === 0) {
      return NextResponse.json(
        { 
          error: 'Service not found',
          code: 'SERVICE_NOT_FOUND' 
        },
        { status: 404 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Prepare updates object
    const updates: Record<string, any> = {};

    // Validate and sanitize inputs
    if (body.title !== undefined) {
      const title = body.title.trim();
      if (!title) {
        return NextResponse.json(
          { 
            error: 'Title cannot be empty',
            code: 'INVALID_TITLE' 
          },
          { status: 400 }
        );
      }
      updates.title = title;
    }

    if (body.description !== undefined) {
      const description = body.description.trim();
      if (!description) {
        return NextResponse.json(
          { 
            error: 'Description cannot be empty',
            code: 'INVALID_DESCRIPTION' 
          },
          { status: 400 }
        );
      }
      updates.description = description;
    }

    if (body.icon !== undefined) {
      updates.icon = body.icon ? body.icon.trim() : null;
    }

    if (body.featuredImage !== undefined) {
      const featuredImage = body.featuredImage.trim();
      if (!featuredImage) {
        return NextResponse.json(
          { 
            error: 'Featured image cannot be empty',
            code: 'INVALID_FEATURED_IMAGE' 
          },
          { status: 400 }
        );
      }
      updates.featuredImage = featuredImage;
    }

    if (body.orderPosition !== undefined) {
      const orderPosition = parseInt(body.orderPosition);
      if (isNaN(orderPosition) || orderPosition < 0) {
        return NextResponse.json(
          { 
            error: 'Order position must be a non-negative integer',
            code: 'INVALID_ORDER_POSITION' 
          },
          { status: 400 }
        );
      }
      updates.orderPosition = orderPosition;
    }

    if (body.status !== undefined) {
      const status = body.status.trim();
      if (status !== 'published' && status !== 'draft') {
        return NextResponse.json(
          { 
            error: 'Status must be either "published" or "draft"',
            code: 'INVALID_STATUS' 
          },
          { status: 400 }
        );
      }
      updates.status = status;
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    // Update service
    const updated = await db.update(services)
      .set(updates)
      .where(eq(services.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
  } catch (error) {
    console.error('PUT error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
      return NextResponse.json(
        { 
          error: 'Authentication required',
          code: 'UNAUTHORIZED' 
        },
        { status: 401 }
      );
    }

    const id = params.id;

    // Validate ID
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        { 
          error: 'Valid ID is required',
          code: 'INVALID_ID' 
        },
        { status: 400 }
      );
    }

    // Check if service exists
    const existingService = await db.select()
      .from(services)
      .where(eq(services.id, parseInt(id)))
      .limit(1);

    if (existingService.length === 0) {
      return NextResponse.json(
        { 
          error: 'Service not found',
          code: 'SERVICE_NOT_FOUND' 
        },
        { status: 404 }
      );
    }

    // Delete service
    const deleted = await db.delete(services)
      .where(eq(services.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      { 
        message: 'Service deleted successfully',
        service: deleted[0]
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('DELETE error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}