import { sendResponse } from '@/app/utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { ProfileService } from './profile.service';

const create = catchAsync(async (req, res) => {
  const { file } = req;
  if (file) {
    req.body.thumbnail = file.path;
  }
  const { user } = req;
  const result = await ProfileService.create({
    ...req.body,
    user: user.sub,
  });
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Profile created successfully',
    data: result,
  });
});

const findAll = catchAsync(async (_req, res) => {
  const result = await ProfileService.findAll();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Profiles retrieved successfully',
    data: result[0],
  });
});

const update = catchAsync(async (req, res) => {
  const result = await ProfileService.update(req.params.id, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Profile updated successfully',
    data: result,
  });
});

const remove = catchAsync(async (req, res) => {
  await ProfileService.remove(req.params.id);

  sendResponse(res, {
    statusCode: 204,
    success: true,
    message: 'Profile deleted successfully',
    data: {},
  });
});

export const ProfileController = {
  create,
  findAll,
  update,
  remove,
};
