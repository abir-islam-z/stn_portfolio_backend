import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { EducationController } from './education.controller';
import { EducationValidation } from './education.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(EducationValidation.educationCreate),
  EducationController.create,
);

router.get('/', EducationController.findAll);

router.get('/:id', EducationController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(EducationValidation.educationUpdate),
  EducationController.update,
);

router.delete('/:id', auth(), EducationController.remove);

export const EducationRoutes = router;
