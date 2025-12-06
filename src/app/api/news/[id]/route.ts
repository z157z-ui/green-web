import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { newsArticles } from '@/db/schema';
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

    // Fetch article by ID
    const article = await db.select()
      .from(newsArticles)
      .where(eq(newsArticles.id, parseInt(id)))
      .limit(1);

    if (article.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article[0], { status: 200 });
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
        { error: 'Authentication required' },
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

    // Check if article exists
    const existingArticle = await db.select()
      .from(newsArticles)
      .where(eq(newsArticles.id, parseInt(id)))
      .limit(1);

    if (existingArticle.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    const body = await request.json();

    // Prepare update data - trim strings and validate
    const updateData: Record<string, any> = {};

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
      updateData.title = title;
    }

    if (body.content !== undefined) {
      const content = body.content.trim();
      if (!content) {
        return NextResponse.json(
          { 
            error: 'Content cannot be empty',
            code: 'INVALID_CONTENT' 
          },
          { status: 400 }
        );
      }
      updateData.content = content;
    }

    if (body.excerpt !== undefined) {
      const excerpt = body.excerpt.trim();
      if (!excerpt) {
        return NextResponse.json(
          { 
            error: 'Excerpt cannot be empty',
            code: 'INVALID_EXCERPT' 
          },
          { status: 400 }
        );
      }
      updateData.excerpt = excerpt;
    }

    if (body.category !== undefined) {
      const category = body.category.trim();
      if (!category) {
        return NextResponse.json(
          { 
            error: 'Category cannot be empty',
            code: 'INVALID_CATEGORY' 
          },
          { status: 400 }
        );
      }
      updateData.category = category;
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
      updateData.featuredImage = featuredImage;
    }

    if (body.author !== undefined) {
      const author = body.author.trim();
      if (!author) {
        return NextResponse.json(
          { 
            error: 'Author cannot be empty',
            code: 'INVALID_AUTHOR' 
          },
          { status: 400 }
        );
      }
      updateData.author = author;
    }

    if (body.publishedDate !== undefined) {
      const publishedDate = body.publishedDate.trim();
      if (!publishedDate) {
        return NextResponse.json(
          { 
            error: 'Published date cannot be empty',
            code: 'INVALID_PUBLISHED_DATE' 
          },
          { status: 400 }
        );
      }
      // Validate date string
      const dateObj = new Date(publishedDate);
      if (isNaN(dateObj.getTime())) {
        return NextResponse.json(
          { 
            error: 'Published date must be a valid date string',
            code: 'INVALID_DATE_FORMAT' 
          },
          { status: 400 }
        );
      }
      updateData.publishedDate = publishedDate;
    }

    if (body.status !== undefined) {
      const status = body.status.trim();
      if (status !== 'published' && status !== 'draft') {
        return NextResponse.json(
          { 
            error: 'Status must be "published" or "draft"',
            code: 'INVALID_STATUS' 
          },
          { status: 400 }
        );
      }
      updateData.status = status;
    }

    // Always update updatedAt
    updateData.updatedAt = new Date().toISOString();

    // Update article
    const updated = await db.update(newsArticles)
      .set(updateData)
      .where(eq(newsArticles.id, parseInt(id)))
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
        { error: 'Authentication required' },
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

    // Check if article exists
    const existingArticle = await db.select()
      .from(newsArticles)
      .where(eq(newsArticles.id, parseInt(id)))
      .limit(1);

    if (existingArticle.length === 0) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    // Delete article
    const deleted = await db.delete(newsArticles)
      .where(eq(newsArticles.id, parseInt(id)))
      .returning();

    return NextResponse.json(
      { 
        message: 'Article deleted successfully',
        article: deleted[0]
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