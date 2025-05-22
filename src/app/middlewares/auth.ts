import config from '@app/config';
import AppError from '@app/errors/AppError';
import { UserModel } from '@modules/user/user.model';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt from 'jsonwebtoken';
import { TDecodedJwtPayload } from '../modules/auth/auth.interface';
import catchAsync from '../utils/catchAsync';

const auth = () => {
  return catchAsync(
    async (req: Request, _res: Response, next: NextFunction) => {
      const token =
        req.headers.authorization?.split(' ')[1] || req.cookies.token;

      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }

      // checking if the given token is valid
      const decoded = jwt.verify(
        token,
        config.jwt.access_secret as string,
      ) as TDecodedJwtPayload;

      const { sub } = decoded;

      // checking if the user exists
      const user = await UserModel.findById(sub);

      if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
      }

      req.user = decoded;
      next();
    },
  );
};

export default auth;
