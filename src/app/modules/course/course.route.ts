import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(CourseValidation.courseCreate),
  CourseController.create,
);

router.get('/', CourseController.findAll);

router.get('/:id', CourseController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(CourseValidation.courseUpdate),
  CourseController.update,
);

router.delete('/:id', auth(), CourseController.remove);

export const CourseRoutes = router;
