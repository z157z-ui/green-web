import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { services } from '@/db/schema';
import { eq, like, or, asc, desc, and } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single service by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const service = await db
        .select()
        .from(services)
        .where(eq(services.id, parseInt(id)))
        .limit(1);

      if (service.length === 0) {
        return NextResponse.json(
          { error: 'Service not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(service[0], { status: 200 });
    }

    // List services with filtering and pagination
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '100'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const statusFilter = searchParams.get('status');
    const sortField = searchParams.get('sort') ?? 'orderPosition';
    const sortOrder = searchParams.get('order') ?? 'asc';

    let query = db.select().from(services);

    // Build where conditions
    const conditions = [];

    // Search condition
    if (search) {
      conditions.push(
        or(
          like(services.title, `%${search}%`),
          like(services.description, `%${search}%`)
        )
      );
    }

    // Status filter
    if (statusFilter) {
      conditions.push(eq(services.status, statusFilter));
    }

    // Apply where conditions
    if (conditions.length > 0) {
      query = query.where(conditions.length === 1 ? conditions[0] : and(...conditions));
    }

    // Apply sorting
    const orderByColumn = sortField === 'orderPosition' ? services.orderPosition :
                         sortField === 'title' ? services.title :
                         sortField === 'createdAt' ? services.createdAt :
                         sortField === 'updatedAt' ? services.updatedAt :
                         services.orderPosition;

    query = query.orderBy(
      sortOrder === 'desc' ? desc(orderByColumn) : asc(orderByColumn)
    );

    // Apply pagination
    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
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

export async function POST(request: NextRequest) {
  try {
    // Authentication check
    const session = await auth.api.getSession({ headers: request.headers });
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Extract and sanitize fields
    const title = body.title?.trim();
    const description = body.description?.trim();
    const featuredImage = body.featuredImage?.trim();
    const icon = body.icon?.trim();
    const orderPosition = body.orderPosition;
    const status = body.status?.trim();

    // Validate required fields
    if (!title) {
      return NextResponse.json(
        { error: 'Title is required', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!description) {
      return NextResponse.json(
        { error: 'Description is required', code: 'MISSING_DESCRIPTION' },
        { status: 400 }
      );
    }

    if (!featuredImage) {
      return NextResponse.json(
        { error: 'Featured image is required', code: 'MISSING_FEATURED_IMAGE' },
        { status: 400 }
      );
    }

    // Validate orderPosition if provided
    if (orderPosition !== undefined && orderPosition !== null) {
      const parsedPosition = parseInt(orderPosition);
      if (isNaN(parsedPosition) || parsedPosition < 0) {
        return NextResponse.json(
          { error: 'Order position must be a non-negative integer', code: 'INVALID_ORDER_POSITION' },
          { status: 400 }
        );
      }
    }

    // Validate status if provided
    if (status && status !== 'published' && status !== 'draft') {
      return NextResponse.json(
        { error: 'Status must be either "published" or "draft"', code: 'INVALID_STATUS' },
        { status: 400 }
      );
    }

    // Prepare insert data
    const now = new Date().toISOString();
    const insertData: any = {
      title,
      description,
      featuredImage,
      createdAt: now,
      updatedAt: now,
      orderPosition: orderPosition !== undefined && orderPosition !== null ? parseInt(orderPosition) : 0,
      status: status || 'published',
    };

    // Add optional icon if provided
    if (icon) {
      insertData.icon = icon;
    }

    // Insert into database
    const newService = await db.insert(services).values(insertData).returning();

    return NextResponse.json(newService[0], { status: 201 });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('POST error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}