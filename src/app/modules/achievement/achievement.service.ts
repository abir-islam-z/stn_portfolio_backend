import { BadRequestException } from '@/app/errors/Exceptions';
import { EducationModel } from '../education/education.model';
import { TAchievement } from './achievement.interface';
import { AchievementModel } from './achievement.model';

const create = async (data: TAchievement) => {
  const findEducation = await EducationModel.findById(data.education);
  if (!findEducation) {
    throw new BadRequestException('Non existent education id');
  }
  return await AchievementModel.create(data);
};

const findAll = async () => {
  return await AchievementModel.find();
};

const findOne = async (id: string) => {
  return await AchievementModel.findById(id);
};

const update = async (id: string, data: Partial<TAchievement>) => {
  return await AchievementModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await AchievementModel.findByIdAndDelete(id);
};

export const AchievementService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
