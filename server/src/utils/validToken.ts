import jwt from "jsonwebtoken";
import { keys } from "../config/keys";

export const decodeToken = (token: any) => {
  try {
    const decoded = jwt.verify(token, keys.jwt_secret);
    return decoded;
  } catch (err) {
    return err;
  }
};
