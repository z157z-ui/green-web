import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { teamMembers } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getSession } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Validate ID
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        {
          error: "Valid ID is required",
          code: "INVALID_ID"
        },
        { status: 400 }
      );
    }

    // Fetch team member
    const teamMember = await db.select()
      .from(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .limit(1);

    if (teamMember.length === 0) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(teamMember[0], { status: 200 });
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
    // Authentication check
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id } = await params;

    // Validate ID
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        {
          error: "Valid ID is required",
          code: "INVALID_ID"
        },
        { status: 400 }
      );
    }

    // Check if team member exists
    const existing = await db.select()
      .from(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const updates: Record<string, any> = {};

    // Validate and sanitize fields
    if (body.name !== undefined) {
      const trimmedName = body.name.trim();
      if (!trimmedName) {
        return NextResponse.json(
          {
            error: "Name cannot be empty",
            code: "INVALID_NAME"
          },
          { status: 400 }
        );
      }
      updates.name = trimmedName;
    }

    if (body.title !== undefined) {
      const trimmedTitle = body.title.trim();
      if (!trimmedTitle) {
        return NextResponse.json(
          {
            error: "Title cannot be empty",
            code: "INVALID_TITLE"
          },
          { status: 400 }
        );
      }
      updates.title = trimmedTitle;
    }

    if (body.bio !== undefined) {
      const trimmedBio = body.bio.trim();
      if (!trimmedBio) {
        return NextResponse.json(
          {
            error: "Bio cannot be empty",
            code: "INVALID_BIO"
          },
          { status: 400 }
        );
      }
      updates.bio = trimmedBio;
    }

    if (body.image !== undefined) {
      const trimmedImage = body.image.trim();
      if (!trimmedImage) {
        return NextResponse.json(
          {
            error: "Image cannot be empty",
            code: "INVALID_IMAGE"
          },
          { status: 400 }
        );
      }
      updates.image = trimmedImage;
    }

    if (body.officeLocation !== undefined) {
      const trimmedLocation = body.officeLocation.trim();
      if (!trimmedLocation) {
        return NextResponse.json(
          {
            error: "Office location cannot be empty",
            code: "INVALID_OFFICE_LOCATION"
          },
          { status: 400 }
        );
      }
      updates.officeLocation = trimmedLocation;
    }

    if (body.email !== undefined) {
      if (body.email) {
        const trimmedEmail = body.email.trim().toLowerCase();
        // Basic email validation
        if (!trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
          return NextResponse.json(
            {
              error: "Invalid email format",
              code: "INVALID_EMAIL"
            },
            { status: 400 }
          );
        }
        updates.email = trimmedEmail;
      } else {
        updates.email = null;
      }
    }

    if (body.orderPosition !== undefined) {
      const orderPos = parseInt(body.orderPosition);
      if (isNaN(orderPos) || orderPos < 0) {
        return NextResponse.json(
          {
            error: "Order position must be a non-negative integer",
            code: "INVALID_ORDER_POSITION"
          },
          { status: 400 }
        );
      }
      updates.orderPosition = orderPos;
    }

    if (body.status !== undefined) {
      const trimmedStatus = body.status.trim();
      if (trimmedStatus !== 'published' && trimmedStatus !== 'draft') {
        return NextResponse.json(
          {
            error: "Status must be 'published' or 'draft'",
            code: "INVALID_STATUS"
          },
          { status: 400 }
        );
      }
      updates.status = trimmedStatus;
    }

    // Always update updatedAt
    updates.updatedAt = new Date().toISOString();

    // Update team member
    const updated = await db.update(teamMembers)
      .set(updates)
      .where(eq(teamMembers.id, parseInt(id)))
      .returning();

    return NextResponse.json(updated[0], { status: 200 });
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
    // Authentication check
    const session = await getSession();
    if (!session) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { id } = await params;

    // Validate ID
    if (!id || isNaN(parseInt(id)) || parseInt(id) <= 0) {
      return NextResponse.json(
        {
          error: "Valid ID is required",
          code: "INVALID_ID"
        },
        { status: 400 }
      );
    }

    // Check if team member exists
    const existing = await db.select()
      .from(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .limit(1);

    if (existing.length === 0) {
      return NextResponse.json(
        { error: 'Team member not found' },
        { status: 404 }
      );
    }

    // Delete team member
    const deleted = await db.delete(teamMembers)
      .where(eq(teamMembers.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      {
        message: 'Team member deleted successfully',
        teamMember: deleted[0]
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