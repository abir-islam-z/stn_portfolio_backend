import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

export const createToken = (payload: JwtPayload) => {
  const signOptions: SignOptions = {
    expiresIn: payload.expiresIn as '1d',
  };

  return jwt.sign(payload.jwtPayload, payload.secret, signOptions);
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
