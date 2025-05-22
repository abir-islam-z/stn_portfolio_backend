import { model, Schema } from 'mongoose';
import { TCourse } from './course.interface';

// {
//   education: Types.ObjectId;
//   name: string;
//   provider: string;
//   year: string;
//   icon: string;
// };

const courseSchema = new Schema<TCourse>({
  education: {
    type: Schema.Types.ObjectId,
    ref: 'education',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const CourseModel = model<TCourse>('course', courseSchema);
