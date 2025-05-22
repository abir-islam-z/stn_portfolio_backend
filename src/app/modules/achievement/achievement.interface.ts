import { Types } from 'mongoose';

export type TAchievement = {
  education: Types.ObjectId;
  icon: string;
  title: string;
  description: string;
};
