import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { ProjectController } from './project.controller';
import { ProjectValidation } from './project.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(ProjectValidation.projectCreate),
  ProjectController.create,
);

router.get('/', ProjectController.findAll);

router.get('/:slug', ProjectController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(ProjectValidation.projectUpdate),
  ProjectController.update,
);

router.delete('/:id', auth(), ProjectController.remove);

export const ProjectRoutes = router;
