import { z } from 'zod';

const profileCreate = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  title: z.string({
    required_error: 'Title is required',
  }),
  experience: z.string({
    required_error: 'Experience is required',
  }),
  resumeFile: z.string({
    required_error: 'Resume file is required',
  }),
  github: z.string({
    required_error: 'GitHub link is required',
  }),
  linkedin: z.string({
    required_error: 'LinkedIn link is required',
  }),
  twitter: z.string({
    required_error: 'Twitter link is required',
  }),
  career_summary: z.string({
    required_error: 'Career summary is required',
  }),
});

const profileUpdate = profileCreate.partial();

// Add more validation if needed
// Example: const profileDelete = z.object({ id: z.string().uuid() });

export const ProfileValidation = {
  profileCreate,
  profileUpdate,
};
