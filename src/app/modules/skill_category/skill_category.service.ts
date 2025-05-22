import { TSkill_category } from './skill_category.interface';
import { Skill_categoryModel } from './skill_category.model';

const create = async (data: TSkill_category) => {
  return await Skill_categoryModel.create(data);
};

const findAll = async () => {
  return await Skill_categoryModel.find();
};

const findOne = async (id: string) => {
  return await Skill_categoryModel.findById(id);
};

const update = async (id: string, data: Partial<TSkill_category>) => {
  return await Skill_categoryModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await Skill_categoryModel.findByIdAndDelete(id);
};

export const Skill_categoryService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
