import { Types } from 'mongoose';

export type IProfile = {
  name: string;
  title: string;
  experience: string;
  resumeFile: string;
  github: string;
  linkedin: string;
  twitter: string;
  career_summary: string;
  user: Types.ObjectId;
};
