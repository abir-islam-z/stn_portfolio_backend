import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { ExperienceController } from './experience.controller';
import { ExperienceValidation } from './experience.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(ExperienceValidation.experienceCreate),
  ExperienceController.create,
);

router.get('/', ExperienceController.findAll);

router.get('/:id', ExperienceController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(ExperienceValidation.experienceUpdate),
  ExperienceController.update,
);

router.delete('/:id', auth(), ExperienceController.remove);

export const ExperienceRoutes = router;
