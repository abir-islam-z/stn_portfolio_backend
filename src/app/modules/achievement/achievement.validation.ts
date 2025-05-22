import { z } from 'zod';

const achievementCreate = z.object({
  education: z.string().min(1, 'Education is required'),
  icon: z.string().min(1, 'Icon is required'),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
});

const achievementUpdate = achievementCreate.partial();

// Add more validation if needed
// Example: const achievementDelete = z.object({ id: z.string().uuid() });

export const AchievementValidation = {
  achievementCreate,
  achievementUpdate,
};
