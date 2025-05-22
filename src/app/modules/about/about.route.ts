import auth from '@/app/middlewares/auth';
import validateRequest from '@/app/middlewares/validateRequest';
import { unflattenObject } from '@/app/utils/flattenFormDataHandler';
import { upload } from '@/app/utils/sendFileToCludinary';
import { Router } from 'express';
import { AboutController } from './about.controller';
import { AboutValidation } from './about.validation';

const router = Router();

router.post(
  '/',
  auth(),
  upload.single('featuredImage'),
  (req, _res, next) => {
    req.body = unflattenObject(req.body);
    next();
  },
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
