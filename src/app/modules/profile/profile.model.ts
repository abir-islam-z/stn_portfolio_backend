import { model, Schema } from 'mongoose';
import { TProfile } from './profile.interface';

const profileSchema = new Schema<TProfile>({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  resumeFile: {
    type: String,
    required: true,
  },
  socialLinks: {
    github: {
      type: String,
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
  },

  career_summary: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export const ProfileModel = model<TProfile>('profile', profileSchema);
