import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { BlogController } from './blog.controller';
import { BlogValidation } from './blog.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(BlogValidation.blogCreate),
  BlogController.create,
);

router.get('/', BlogController.findAll);

router.get('/:slug', BlogController.findOne);

router.patch(
  '/:id',
  auth(),
  validateRequest(BlogValidation.blogUpdate),
  BlogController.update,
);

router.delete('/:id', auth(), BlogController.remove);

export const BlogRoutes = router;
