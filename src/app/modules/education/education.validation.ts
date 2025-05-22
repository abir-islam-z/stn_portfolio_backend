import { z } from 'zod';

/* degree: string;
  institution: string;
  location: string;
  period: string;
  description: string; */

const educationCreate = z.object({
  degree: z.string().min(1, 'Degree is required'),
  institution: z.string().min(1, 'Institution is required'),
  location: z.string().min(1, 'Location is required'),
  period: z.string().min(1, 'Period is required'),
  description: z.string().min(1, 'Description is required'),
});

const educationUpdate = educationCreate.partial();

// Add more validation if needed
// Example: const educationDelete = z.object({ id: z.string().uuid() });

export const EducationValidation = {
  educationCreate,
  educationUpdate,
};
