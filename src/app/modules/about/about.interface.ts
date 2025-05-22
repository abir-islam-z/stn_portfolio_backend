import { Types } from 'mongoose';

export type TAbout = {
  description: string;
  featuredImage: string;
  personalInfo: {
    job_title: string;
    experience: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  user: Types.ObjectId;
};
