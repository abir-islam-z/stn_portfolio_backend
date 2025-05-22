import { TAbout } from './about.interface';
import { AboutModel } from './about.model';

const create = async (data: TAbout) => {
  return await AboutModel.findOneAndUpdate({ user: data.user }, data, {
    upsert: true,
    new: true,
  });
};

const findAll = async () => {
  return await AboutModel.find();
};

const findOne = async (id: string) => {
  return await AboutModel.findById(id);
};

const update = async (id: string, data: Partial<TAbout>) => {
  return await AboutModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await AboutModel.findByIdAndDelete(id);
};

export const AboutService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
