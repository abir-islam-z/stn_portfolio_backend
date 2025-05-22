import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { SkillService } from './skill.service';

const create = catchAsync(async (req, res) => {
  const result = await SkillService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Skill created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await SkillService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await SkillService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await SkillService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill updated successfully',
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  await SkillService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Skill deleted successfully',
    data: {},
  });
});

export const SkillController = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
