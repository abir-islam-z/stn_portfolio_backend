import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { TProfile } from '../profile/profile.interface';
import { ProfileModel } from '../profile/profile.model';
import { UserModel } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken, verifyToken } from './auth.utils';
import { TRegister } from './auth.validation';

const registerUser = async (payload: TRegister) => {
  await UserModel.create(payload);
};

const loginUser = async (
  payload: TLoginUser,
): Promise<{
  accessToken: string;
  refreshToken: string;
  profile: TProfile | null;
}> => {
  const user = await UserModel.findOne({
    email: payload.email,
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  const isPasswordMatched = await UserModel.isPasswordMatched({
    encryptedPassword: user?.password,
    password: payload.password,
  });

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid Credentials');
  }

  const jwtPayload = {
    sub: user._id,
    email: user.email as string,
  };

  const accessToken = createToken({
    jwtPayload,
    secret: config.jwt.access_secret as string,
    expiresIn: config.jwt.access_expires_in as string,
  });

  const refreshToken = createToken({
    jwtPayload,
    secret: config.jwt.refresh_secret as string,
    expiresIn: config.jwt.refresh_expires_in as string,
  });

  const findProfile = await ProfileModel.findOne({
    user: user._id,
  })
    .select('-user -_id -__v')
    .lean();

  return {
    accessToken,
    refreshToken,
    profile: findProfile,
  };
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt.refresh_secret as string);

  const { email } = decoded;

  // checking if the user exists
  const user = await UserModel.findOne({
    email,
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  const jwtPayload = {
    sub: user._id,
    email: user.email,
  };

  const accessToken = createToken({
    jwtPayload,
    secret: config.jwt.access_secret as string,
    expiresIn: config.jwt.access_expires_in as string,
  });

  return {
    accessToken,
  };
};

export const AuthService = {
  registerUser,
  loginUser,
  refreshToken,
};
