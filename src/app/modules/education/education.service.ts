import { TEducation } from './education.interface';
import { EducationModel } from './education.model';

const create = async (data: TEducation) => {
  return await EducationModel.create(data);
};

const findAll = async () => {
  return await EducationModel.find();
};

const findOne = async (id: string) => {
  return await EducationModel.findById(id);
};

const update = async (id: string, data: Partial<TEducation>) => {
  return await EducationModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await EducationModel.findByIdAndDelete(id);
};

export const EducationService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
