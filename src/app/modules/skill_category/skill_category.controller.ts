import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { Skill_categoryService } from './skill_category.service';

const create = catchAsync(async (req, res) => {
  const result = await Skill_categoryService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Skill_category created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await Skill_categoryService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill_category retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await Skill_categoryService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill_category retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await Skill_categoryService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill_category updated successfully',
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  await Skill_categoryService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill_category deleted successfully',
    data: null,
  });
});

export const Skill_categoryController = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
