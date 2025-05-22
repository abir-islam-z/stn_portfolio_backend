import { BadRequestException } from '@/app/errors/Exceptions';
import { EducationModel } from '../education/education.model';
import { TSubject } from './subject.interface';
import { SubjectModel } from './subject.model';

const create = async (data: TSubject) => {
  const findEducation = await EducationModel.findById(data.education);
  if (!findEducation) {
    throw new BadRequestException('Non existent education id');
  }
  return await SubjectModel.create(data);
};

const findAll = async () => {
  return await SubjectModel.find();
};

const findOne = async (id: string) => {
  return await SubjectModel.findById(id);
};

const update = async (id: string, data: Partial<TSubject>) => {
  return await SubjectModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await SubjectModel.findByIdAndDelete(id);
};

export const SubjectService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
