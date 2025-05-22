import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { upload } from '@/app/utils/sendFileToCludinary';
import { Router } from 'express';
import { ProfileController } from './profile.controller';
import { ProfileValidation } from './profile.validation';

const router = Router();

router.post(
  '/',
  auth(),
  upload.single('thumbnail'),
  validateRequest(ProfileValidation.profileUpdate), // As we are using upsert
  ProfileController.create,
);

router.get('/', ProfileController.findAll);

router.patch(
  '/:id',
  auth(),
  validateRequest(ProfileValidation.profileUpdate),
  ProfileController.update,
);

router.delete('/:id', auth(), ProfileController.remove);

export const ProfileRoutes = router;
