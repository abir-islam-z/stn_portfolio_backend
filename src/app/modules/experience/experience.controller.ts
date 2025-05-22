import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { ExperienceService } from './experience.service';

const create = catchAsync(async (req, res) => {
  const result = await ExperienceService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await ExperienceService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await ExperienceService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await ExperienceService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Experience updated successfully',
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  await ExperienceService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Experience deleted successfully',
    data: {},
  });
});

export const ExperienceController = {
  create,
  findAll,
  findOne,
  update,
  remove,
};
