import { z } from 'zod';
const socialMediaSchema = z.object({
  github: z.string().url('Please enter a valid GitHub URL'),
  linkedin: z.string().url('Please enter a valid LinkedIn URL'),
  twitter: z.string().url('Please enter a valid Twitter URL'),
});

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
  career_summary: z.string({
    required_error: 'Career summary is required',
  }),
  socialLinks: socialMediaSchema,
  thumbnail: z.string().url('Please enter a valid URL'),
});

const profileUpdate = profileCreate.partial();

// Add more validation if needed
// Example: const profileDelete = z.object({ id: z.string().uuid() });

export const ProfileValidation = {
  profileCreate,
  profileUpdate,
};
