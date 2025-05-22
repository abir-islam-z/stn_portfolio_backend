export interface TRegisterUser {
  name: string;
  email: string;
  password: string;
}

export interface TLoginUser {
  email: string;
  password: string;
}

export interface TJwtPayload {
  jwtPayload: { sub: string; email: string };
  secret: string;
  expiresIn?: string | number;
}

export interface TDecodedJwtPayload {
  sub: string;
  iat: number;
  exp: number;
  email: string;
}
