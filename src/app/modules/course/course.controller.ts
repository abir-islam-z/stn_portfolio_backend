import catchAsync from '../../utils/catchAsync';
import { CourseService } from './course.service';
import { sendResponse } from '@/app/utils/sendResponse';

const create = catchAsync(async (req, res) => {
  const result = await CourseService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await CourseService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await CourseService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Course retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await CourseService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Course updated successfully',
    data: result,
  });
});


const remove = catchAsync(async (req, res) => {
  await CourseService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Course deleted successfully',
    data: {},
  });
});

export const CourseController = {
    create,
    findAll,
    findOne,
    update,
    remove,
};