import { z } from 'zod';

const subjectCreate = z.object({
  education: z.string({
    required_error: 'Education ID is required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  icon: z.string().min(1, {
    message: 'Icon is required',
  }),
});

const subjectUpdate = subjectCreate.partial();

// Add more validation if needed
// Example: const subjectDelete = z.object({ id: z.string().uuid() });

export const SubjectValidation = {
  subjectCreate,
  subjectUpdate,
};
