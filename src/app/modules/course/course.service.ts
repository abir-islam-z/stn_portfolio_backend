import { BadRequestException } from '@/app/errors/Exceptions';
import { EducationModel } from '../education/education.model';
import { TCourse } from './course.interface';
import { CourseModel } from './course.model';

const create = async (data: TCourse) => {
  const findEducation = await EducationModel.findById(data.education);
  if (!findEducation) {
    throw new BadRequestException('Non existent education id');
  }
  return await CourseModel.create(data);
};

const findAll = async () => {
  return await CourseModel.find();
};

const findOne = async (id: string) => {
  return await CourseModel.findById(id);
};

const update = async (id: string, data: Partial<TCourse>) => {
  return await CourseModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await CourseModel.findByIdAndDelete(id);
};

export const CourseService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
