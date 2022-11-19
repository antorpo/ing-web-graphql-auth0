import jwt from "jsonwebtoken";

export const signToken = (data: any) => {
  return jwt.sign(data, process.env.NEXTAUTH_SECRET);
};

export const verifyToken = (token: String) => {
  return jwt.verify(token, process.env.NEXTAUTH_SECRET);
};
