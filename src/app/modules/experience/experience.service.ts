import { TExperience } from './experience.interface';
import { ExperienceModel } from './experience.model';

const create = async (data: TExperience) => {
  return await ExperienceModel.create(data);
};

const findAll = async () => {
  return await ExperienceModel.find();
};

const findOne = async (id: string) => {
  return await ExperienceModel.findById(id);
};

const update = async (id: string, data: Partial<TExperience>) => {
  return await ExperienceModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await ExperienceModel.findByIdAndDelete(id);
};

export const ExperienceService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
