import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { SkillController } from './skill.controller';
import { SkillValidation } from './skill.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(SkillValidation.skillCreate),
  SkillController.create,
);

router.get('/', SkillController.findAll);

router.get('/:id', SkillController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(SkillValidation.skillUpdate),
  SkillController.update,
);

router.delete('/:id', auth(), SkillController.remove);

export const SkillRoutes = router;
