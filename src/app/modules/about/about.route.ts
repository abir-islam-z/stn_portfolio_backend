import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { Router } from 'express';
import { AboutController } from './about.controller';
import { AboutValidation } from './about.validation';

const router = Router();

router.post(
  '/',
  auth(),
  validateRequest(AboutValidation.aboutUpdate), // upsert
  AboutController.create,
);

router.get('/', AboutController.findAll);

router.patch(
  '/:id',
  auth(),
  validateRequest(AboutValidation.aboutUpdate),
  AboutController.update,
);

router.delete('/:id', auth(), AboutController.remove);

export const AboutRoutes = router;
