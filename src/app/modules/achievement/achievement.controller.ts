import catchAsync from '../../utils/catchAsync';
import { AchievementService } from './achievement.service';
import { sendResponse } from '@/app/utils/sendResponse';

const create = catchAsync(async (req, res) => {
  const result = await AchievementService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Achievement created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await AchievementService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Achievement retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await AchievementService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Achievement retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await AchievementService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Achievement updated successfully',
    data: result,
  });
});


const remove = catchAsync(async (req, res) => {
  await AchievementService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Achievement deleted successfully',
    data: {},
  });
});

export const AchievementController = {
    create,
    findAll,
    findOne,
    update,
    remove,
};