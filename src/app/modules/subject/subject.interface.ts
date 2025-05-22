import { Types } from 'mongoose';

export type TSubject = {
  education: Types.ObjectId;
  name: string;
  icon: string;
};
