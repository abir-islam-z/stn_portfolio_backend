import { model, Schema } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String }],
  demoUrl: { type: String, required: true },
  repoUrl: { type: String, required: true },
  features: [{ type: String }],
});

export const ProjectModel = model<TProject>('project', projectSchema);
