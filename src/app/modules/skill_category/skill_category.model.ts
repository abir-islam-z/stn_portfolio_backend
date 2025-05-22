import { model, Schema } from 'mongoose';
import { TSkill_category } from './skill_category.interface';

const skill_categorySchema = new Schema<TSkill_category>({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const Skill_categoryModel = model<TSkill_category>(
  'skill_category',
  skill_categorySchema,
);
