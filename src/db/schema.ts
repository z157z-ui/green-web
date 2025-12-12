import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Content Management Tables
export const projects = sqliteTable('projects', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
  location: text('location').notNull(),
  year: integer('year').notNull(),
  featuredImage: text('featured_image').notNull(),
  galleryImages: text('gallery_images', { mode: 'json' }),
  status: text('status').notNull().default('published'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const services = sqliteTable('services', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  description: text('description').notNull(),
  icon: text('icon'),
  featuredImage: text('featured_image').notNull(),
  orderPosition: integer('order_position').default(0),
  status: text('status').notNull().default('published'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const newsArticles = sqliteTable('news_articles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt').notNull(),
  category: text('category').notNull(),
  featuredImage: text('featured_image').notNull(),
  author: text('author').notNull(),
  publishedDate: text('published_date').notNull(),
  status: text('status').notNull().default('published'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const teamMembers = sqliteTable('team_members', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  title: text('title').notNull(),
  bio: text('bio').notNull(),
  image: text('image').notNull(),
  officeLocation: text('office_location').notNull(),
  email: text('email'),
  orderPosition: integer('order_position').default(0),
  status: text('status').notNull().default('published'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});