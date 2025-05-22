import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { BlogService } from './blog.service';

const create = catchAsync(async (req, res) => {
  const result = await BlogService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blog created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await BlogService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await BlogService.findOne(req.params.slug);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await BlogService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  await BlogService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Blog deleted successfully',
    data: {},
  });
});

export const BlogController = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
