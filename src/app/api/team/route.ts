import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { teamMembers } from '@/db/schema';
import { eq, like, or, asc, desc, and } from 'drizzle-orm';
import { auth } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    // Single team member by ID
    if (id) {
      if (!id || isNaN(parseInt(id))) {
        return NextResponse.json(
          { error: 'Valid ID is required', code: 'INVALID_ID' },
          { status: 400 }
        );
      }

      const teamMember = await db
        .select()
        .from(teamMembers)
        .where(eq(teamMembers.id, parseInt(id)))
        .limit(1);

      if (teamMember.length === 0) {
        return NextResponse.json(
          { error: 'Team member not found', code: 'NOT_FOUND' },
          { status: 404 }
        );
      }

      return NextResponse.json(teamMember[0], { status: 200 });
    }

    // List team members with filtering, search, and sorting
    const limit = Math.min(parseInt(searchParams.get('limit') ?? '100'), 100);
    const offset = parseInt(searchParams.get('offset') ?? '0');
    const search = searchParams.get('search');
    const status = searchParams.get('status');
    const sortField = searchParams.get('sort') ?? 'orderPosition';
    const sortOrder = searchParams.get('order') ?? 'asc';

    let query = db.select().from(teamMembers);

    // Build conditions array
    const conditions = [];

    // Search filter
    if (search) {
      conditions.push(
        or(
          like(teamMembers.name, `%${search}%`),
          like(teamMembers.title, `%${search}%`),
          like(teamMembers.officeLocation, `%${search}%`)
        )
      );
    }

    // Status filter
    if (status && (status === 'published' || status === 'draft')) {
      conditions.push(eq(teamMembers.status, status));
    }

    // Apply combined conditions
    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    // Sorting
    const orderColumn =
      sortField === 'name'
        ? teamMembers.name
        : sortField === 'createdAt'
        ? teamMembers.createdAt
        : teamMembers.orderPosition;

    query =
      sortOrder === 'desc'
        ? query.orderBy(desc(orderColumn))
        : query.orderBy(asc(orderColumn));

    // Pagination
    const results = await query.limit(limit).offset(offset);

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
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
    const { name, title, bio, image, officeLocation, email, orderPosition, status } = body;

    // Validate required fields
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required and must be a non-empty string', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
      return NextResponse.json(
        { error: 'Title is required and must be a non-empty string', code: 'MISSING_TITLE' },
        { status: 400 }
      );
    }

    if (!bio || typeof bio !== 'string' || bio.trim().length === 0) {
      return NextResponse.json(
        { error: 'Bio is required and must be a non-empty string', code: 'MISSING_BIO' },
        { status: 400 }
      );
    }

    if (!image || typeof image !== 'string' || image.trim().length === 0) {
      return NextResponse.json(
        { error: 'Image is required and must be a non-empty string', code: 'MISSING_IMAGE' },
        { status: 400 }
      );
    }

    if (!officeLocation || typeof officeLocation !== 'string' || officeLocation.trim().length === 0) {
      return NextResponse.json(
        { error: 'Office location is required and must be a non-empty string', code: 'MISSING_OFFICE_LOCATION' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name.trim();
    const sanitizedTitle = title.trim();
    const sanitizedBio = bio.trim();
    const sanitizedImage = image.trim();
    const sanitizedOfficeLocation = officeLocation.trim();

    // Validate and sanitize optional email
    let sanitizedEmail = null;
    if (email) {
      if (typeof email !== 'string') {
        return NextResponse.json(
          { error: 'Email must be a string', code: 'INVALID_EMAIL_TYPE' },
          { status: 400 }
        );
      }
      sanitizedEmail = email.trim().toLowerCase();
      if (sanitizedEmail && (!sanitizedEmail.includes('@') || !sanitizedEmail.includes('.'))) {
        return NextResponse.json(
          { error: 'Invalid email format', code: 'INVALID_EMAIL_FORMAT' },
          { status: 400 }
        );
      }
    }

    // Validate orderPosition
    let validOrderPosition = 0;
    if (orderPosition !== undefined && orderPosition !== null) {
      const parsedOrderPosition = parseInt(orderPosition);
      if (isNaN(parsedOrderPosition) || parsedOrderPosition < 0) {
        return NextResponse.json(
          { error: 'Order position must be a non-negative integer', code: 'INVALID_ORDER_POSITION' },
          { status: 400 }
        );
      }
      validOrderPosition = parsedOrderPosition;
    }

    // Validate status
    let validStatus = 'published';
    if (status) {
      if (status !== 'published' && status !== 'draft') {
        return NextResponse.json(
          { error: 'Status must be either "published" or "draft"', code: 'INVALID_STATUS' },
          { status: 400 }
        );
      }
      validStatus = status;
    }

    // Create team member
    const timestamp = new Date().toISOString();
    const newTeamMember = await db
      .insert(teamMembers)
      .values({
        name: sanitizedName,
        title: sanitizedTitle,
        bio: sanitizedBio,
        image: sanitizedImage,
        officeLocation: sanitizedOfficeLocation,
        email: sanitizedEmail,
        orderPosition: validOrderPosition,
        status: validStatus,
        createdAt: timestamp,
        updatedAt: timestamp,
      })
      .returning();

    return NextResponse.json(newTeamMember[0], { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      { error: 'Internal server error: ' + (error as Error).message },
      { status: 500 }
    );
  }
}