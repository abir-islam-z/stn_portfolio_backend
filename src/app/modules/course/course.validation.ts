import { z } from 'zod';

const courseCreate = z.object({
  education: z.string({
    required_error: 'Education is required',
  }),
  name: z.string().min(1, 'Course name is required'),
  provider: z.string().min(1, 'Provider name is required'),
  year: z.coerce
    .string()
    .min(4, 'Year must be 4 digit number string')
    .max(4, 'Year must be 4 digit number string')
    .regex(/^\d+$/, 'Year must be a number string')
    .transform(val => val.trim()),
  icon: z.string({
    required_error: 'Icon is required',
  }),
});

const courseUpdate = courseCreate.partial();

// Add more validation if needed
// Example: const courseDelete = z.object({ id: z.string().uuid() });

export const CourseValidation = {
  courseCreate,
  courseUpdate,
};
