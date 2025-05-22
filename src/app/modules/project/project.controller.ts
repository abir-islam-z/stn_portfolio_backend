import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { ProjectService } from './project.service';

const create = catchAsync(async (req, res) => {
  const result = await ProjectService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Project created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await ProjectService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await ProjectService.findOne(req.params.slug);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await ProjectService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Project updated successfully',
    data: result,
  });
});


const remove = catchAsync(async (req, res) => {
  await ProjectService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Project deleted successfully',
    data: {},
  });
});

export const ProjectController = {
    create,
    findAll,
    findOne,
    update,
    remove,
};