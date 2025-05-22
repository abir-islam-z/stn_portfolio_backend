import { z } from 'zod';

const projectCreate = z.object({
  title: z.string({
    required_error: 'Title is required',
  }),
  slug: z.string({
    required_error: 'Slug is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
  image: z.string({
    required_error: 'Image is required',
  }),
  category: z.string({
    required_error: 'Category is required',
  }),
  tags: z.array(z.string()).optional(),
  demoUrl: z.string({
    required_error: 'Demo URL is required',
  }),
  repoUrl: z.string({
    required_error: 'Repo URL is required',
  }),
  features: z.array(z.string()).optional(),
});

const projectUpdate = projectCreate.partial();

// Add more validation if needed
// Example: const projectDelete = z.object({ id: z.string().uuid() });

export const ProjectValidation = {
  projectCreate,
  projectUpdate,
};
