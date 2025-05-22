import { z } from 'zod';

const baseSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  icon: z.string({
    required_error: 'Icon is required',
  }),
});

const skill_categoryCreate = baseSchema.transform(data => ({
  ...data,
  value: data.name.toLowerCase().replace(/\s+/g, '-'),
}));

const skill_categoryUpdate = baseSchema.partial().transform(data => ({
  ...data,
  value: data.name?.toLowerCase().replace(/\s+/g, '-'),
}));

// Add more validation if needed
// Example: const skill_categoryDelete = z.object({ id: z.string().uuid() });

export const Skill_categoryValidation = {
  skill_categoryCreate,
  skill_categoryUpdate,
};
