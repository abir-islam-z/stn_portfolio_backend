import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import config from '../config';

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: () => ({
    folder: 'portfolio',
    transformation: [
      {
        width: 500,
        height: 500,
        crop: 'limit',
        quality: 'auto',
        fetch_format: 'webp',
      },
    ],
    allowed_formats: ['jpg', 'png', 'webp', 'avif', 'jpeg'],
  }),
});

export const upload = multer({ storage });
