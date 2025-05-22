import { TProject } from './project.interface';
import { ProjectModel } from './project.model';

const create = async (data: TProject) => {
  return await ProjectModel.create(data);
};

const findAll = async () => {
  return await ProjectModel.find();
};

const findOne = async (slug: string) => {
  return await ProjectModel.findOne({ slug });
};

const update = async (id: string, data: Partial<TProject>) => {
  return await ProjectModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await ProjectModel.findByIdAndDelete(id);
};

export const ProjectService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
