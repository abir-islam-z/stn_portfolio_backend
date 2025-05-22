import config from '@/app/config';
import bcrypt from 'bcrypt';
import { model, Schema } from 'mongoose';
import { isEmail } from 'validator';
import { TUser, TUserModel } from './user.interface';

const userSchema = new Schema<TUser, TUserModel>({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: (value: string) => isEmail(value),
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide your password'],
  },
});

userSchema.pre('save', async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

userSchema.statics.isPasswordMatched = async function ({
  encryptedPassword,
  password: plainTextPassword,
}) {
  return await bcrypt.compare(plainTextPassword, encryptedPassword);
};

export const UserModel = model<TUser, TUserModel>('user', userSchema);
