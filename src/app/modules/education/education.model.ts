import { model, Schema } from 'mongoose';
import { TEducation } from './education.interface';

const educationSchema = new Schema<TEducation>({
  degree: {
    type: String,
    required: true,
  },
  institution: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const EducationModel = model<TEducation>('education', educationSchema);
