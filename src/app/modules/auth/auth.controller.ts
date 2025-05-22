import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../config';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { accessToken: token, refreshToken } = await AuthService.loginUser(
    req.body,
  );

  res.cookie('refreshToken', refreshToken, {
    secure:
      config.NODE_ENV === 'production' || config.NODE_ENV === 'development', // Set secure true for both prod and dev
    httpOnly: true,
    sameSite: config.NODE_ENV === 'production' ? 'none' : 'lax', // Use 'lax' for development
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });

  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: httpStatus.OK,
    data: {
      token,
    },
  });
});

const registerUser = catchAsync(async (req: Request, res: Response) => {
  await AuthService.registerUser(req.body);

  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: httpStatus.CREATED,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  const token = await AuthService.refreshToken(refreshToken);
  sendResponse(res, {
    success: true,
    message: 'Token refreshed successfully',
    statusCode: httpStatus.OK,
    data: {
      token,
    },
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
  registerUser,
};
