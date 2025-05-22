import { model, Schema } from 'mongoose';
import { TSkill } from './skill.interface';

/* {
  name: string;
  category: string;
  icon: string;
};
 */

const skillSchema = new Schema<TSkill>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export const SkillModel = model<TSkill>('skill', skillSchema);
