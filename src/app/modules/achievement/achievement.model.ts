import { model, Schema } from 'mongoose';
import { TAchievement } from './achievement.interface';

const achievementSchema = new Schema<TAchievement>({
  education: {
    type: Schema.Types.ObjectId,
    ref: 'education',
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const AchievementModel = model<TAchievement>(
  'achievement',
  achievementSchema,
);
