import { model, Schema } from 'mongoose';
import { TSubject } from './subject.interface';

const subjectSchema = new Schema<TSubject>({
  education: {
    type: Schema.Types.ObjectId,
    ref: 'education',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const SubjectModel = model<TSubject>('subject', subjectSchema);
