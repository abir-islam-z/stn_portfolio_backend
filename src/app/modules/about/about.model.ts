import { model, Schema } from 'mongoose';
import { TAbout } from './about.interface';

const aboutSchema = new Schema<TAbout>({
  description: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: true,
  },
  personalInfo: {
    job_title: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
  },
  features: [
    {
      icon: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const AboutModel = model<TAbout>('about', aboutSchema);
