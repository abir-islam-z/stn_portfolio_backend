import { z } from 'zod';

/* title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedDate: string;
  tags: string[]; */

const blogCreate = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  slug: z.string({
    required_error: 'Slug is required',
  }),
  excerpt: z.string({
    required_error: 'Excerpt is required',
  }),
  content: z.string({
    required_error: 'Content is required',
  }),
  coverImage: z.string({
    required_error: 'Cover image is required',
  }),
  publishedDate: z.string({
    required_error: 'Published date is required',
  }),
  tags: z.array(z.string()).nonempty({
    message: 'At least one tag is required',
  }),
});

const blogUpdate = blogCreate.partial();

// Add more validation if needed
// Example: const blogDelete = z.object({ id: z.string().uuid() });

export const BlogValidation = {
  blogCreate,
  blogUpdate,
};
