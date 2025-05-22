import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { AchievementController } from './achievement.controller';
import { AchievementValidation } from './achievement.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(AchievementValidation.achievementCreate),
  AchievementController.create,
);

router.get('/', AchievementController.findAll);

router.get('/:id', AchievementController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(AchievementValidation.achievementUpdate),
  AchievementController.update,
);

router.delete('/:id', auth(), AchievementController.remove);

export const AchievementRoutes = router;
