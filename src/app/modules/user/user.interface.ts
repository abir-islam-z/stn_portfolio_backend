import { Model, Types } from 'mongoose';

export type TUser = {
  readonly _id: string;
  email: string;
  password: string;
  profile: Types.ObjectId;
};

export interface TUserModel extends Model<TUser> {
  isPasswordMatched: ({
    encryptedPassword,
    password,
  }: {
    encryptedPassword: string;
    password: string;
  }) => Promise<boolean>;
}
