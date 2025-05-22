import { TBlog } from './blog.interface';
import { BlogModel } from './blog.model';

const create = async (data: TBlog) => {
  return await BlogModel.create(data);
};

const findAll = async () => {
  return await BlogModel.find();
};

const findOne = async (slug: string) => {
  return await BlogModel.findOne({ slug });
};

const update = async (id: string, data: Partial<TBlog>) => {
  return await BlogModel.findByIdAndUpdate(id, data, { new: true });
};

const remove = async (id: string) => {
  await BlogModel.findByIdAndDelete(id);
};

export const BlogService = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
