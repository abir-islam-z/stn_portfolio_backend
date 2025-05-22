import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { Skill_categoryController } from './skill_category.controller';
import { Skill_categoryValidation } from './skill_category.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(Skill_categoryValidation.skill_categoryCreate),
  Skill_categoryController.create,
);

router.get('/', Skill_categoryController.findAll);

router.get('/:id', Skill_categoryController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(Skill_categoryValidation.skill_categoryUpdate),
  Skill_categoryController.update,
);

router.delete('/:id', auth(), Skill_categoryController.remove);

export const Skill_categoryRoutes = router;
