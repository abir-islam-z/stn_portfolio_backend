import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { AboutService } from './about.service';

const create = catchAsync(async (req, res) => {
  const { file } = req;
  if (file) {
    req.body.featuredImage = file.path;
  }
  const { user } = req;
  const result = await AboutService.create({
    ...req.body,
    user: user.sub,
  });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'About created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await AboutService.findAll();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About retrieved successfully',
    data: result[0],
  });
});

const update = catchAsync(async (req, res) => {
  const result = await AboutService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'About updated successfully',
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  await AboutService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'About deleted successfully',
    data: {},
  });
});

export const AboutController = {
  create,
  findAll,
  update,
  remove,
};
