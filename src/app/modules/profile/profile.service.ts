import { TProfile } from './profile.interface';
import { ProfileModel } from './profile.model';

const create = async (data: TProfile) => {
  return await ProfileModel.findOneAndUpdate({ user: data.user }, data, {
    upsert: true,
    new: true,
  });
};

const findAll = async () => {
  return await ProfileModel.find();
};

const findOne = async (id: string) => {
  return await ProfileModel.findById(id);
};

const update = async (id: string, data: Partial<TProfile>) => {
  return await ProfileModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  return await ProfileModel.findByIdAndDelete(id);
};

export const ProfileService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
