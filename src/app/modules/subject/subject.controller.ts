import catchAsync from '../../utils/catchAsync';
import { SubjectService } from './subject.service';
import { sendResponse } from '@/app/utils/sendResponse';

const create = catchAsync(async (req, res) => {
  const result = await SubjectService.create(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Subject created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await SubjectService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Subject retrieved successfully',
    data: result,
  });
});

const findOne = catchAsync(async (req, res) => {
  const result = await SubjectService.findOne(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Subject retrieved successfully',
    data: result,
  });
});

const update = catchAsync(async (req, res) => {
  const result = await SubjectService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Subject updated successfully',
    data: result,
  });
});


const remove = catchAsync(async (req, res) => {
  await SubjectService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Subject deleted successfully',
    data: {},
  });
});

export const SubjectController = {
    create,
    findAll,
    findOne,
    update,
    remove,
};