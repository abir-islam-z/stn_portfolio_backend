import { z } from 'zod';

const skillCreate = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  category: z.string({
    required_error: 'Category is required',
    invalid_type_error: 'Category must be a string',
  }),
  icon: z.string({
    required_error: 'Icon is required',
    invalid_type_error: 'Icon must be a string',
  }),
});

const skillUpdate = skillCreate.partial();

// Add more validation if needed
// Example: const skillDelete = z.object({ id: z.string().uuid() });

export const SkillValidation = {
  skillCreate,
  skillUpdate,
};
