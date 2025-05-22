import { BadRequestException } from '@/app/errors/Exceptions';
import { Skill_categoryModel } from '../skill_category/skill_category.model';
import { TSkill } from './skill.interface';
import { SkillModel } from './skill.model';

const create = async (data: TSkill) => {
  const findSkillCategory = await Skill_categoryModel.find().lean();

  if (!findSkillCategory.some(category => category.value === data.category)) {
    throw new BadRequestException(
      `Skill category "${data.category}" does not exist. Available categories are: ${findSkillCategory.map(
        category => category.value,
      )}`,
    );
  }

  return await SkillModel.create(data);
};

const findAll = async () => {
  return await SkillModel.find();
};

const findOne = async (id: string) => {
  return await SkillModel.findById(id);
};

const update = async (id: string, data: Partial<TSkill>) => {
  return await SkillModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await SkillModel.findByIdAndDelete(id);
};

export const SkillService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
