import { Types } from 'mongoose';

export type TProfile = {
  name: string;
  title: string;
  experience: string;
  resumeFile: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  career_summary: string;
  thumbnail: string;
  user: Types.ObjectId;
};
