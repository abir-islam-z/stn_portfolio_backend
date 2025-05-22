import { z } from 'zod';

/* position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[]; */

const experienceCreate = z.object({
  position: z.string({
    required_error: 'Position is required',
  }),
  company: z.string({
    required_error: 'Company is required',
  }),
  location: z.string({
    required_error: 'Location is required',
  }),
  period: z.string({
    required_error: 'Period is required',
  }),
  description: z.string({
    required_error: 'Description is required',
  }),
  responsibilities: z.array(z.string()).nonempty({
    message: 'At least one responsibility is required',
  }),
});

const experienceUpdate = experienceCreate.partial();

// Add more validation if needed
// Example: const experienceDelete = z.object({ id: z.string().uuid() });

export const ExperienceValidation = {
  experienceCreate,
  experienceUpdate,
};
