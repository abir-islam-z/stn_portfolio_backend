import catchAsync from '../../utils/catchAsync';
import { EducationService } from './education.service';
import { sendResponse } from '@/app/utils/sendResponse';

const create = catchAsync(async (req, res) => {
  const result = await EducationService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Education created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await EducationService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await EducationService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await EducationService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Education updated successfully',
    data: result,
  });
});


const remove = catchAsync(async (req, res) => {
  await EducationService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Education deleted successfully',
    data: {},
  });
});

export const EducationController = {
    create,
    findAll,
    findOne,
    update,
    remove,
};