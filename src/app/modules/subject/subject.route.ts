import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { SubjectController } from './subject.controller';
import { SubjectValidation } from './subject.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(SubjectValidation.subjectCreate),
  SubjectController.create,
);

router.get('/', SubjectController.findAll);

router.get('/:id', SubjectController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(SubjectValidation.subjectUpdate),
  SubjectController.update,
);

router.delete('/:id', auth(), SubjectController.remove);

export const SubjectRoutes = router;
