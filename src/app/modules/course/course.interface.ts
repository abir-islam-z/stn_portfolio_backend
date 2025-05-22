import { Types } from 'mongoose';

export type TCourse = {
  education: Types.ObjectId;
  name: string;
  provider: string;
  year: string;
  icon: string;
};
