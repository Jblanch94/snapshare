import jwt from "jsonwebtoken";
import { keys } from "../config/keys";

/**
 * Function that generates a jwt token
 * @param payload - string containing the user id
 * @param time - the expiration time as a string or number
 * @returns {string} - returns the token as a string
 */
export const jwtGenerator = (
  payload: { user_id: string },
  time: string | number | undefined
): string => {
  const token = jwt.sign(payload, keys.jwt_secret, { expiresIn: time });
  return token;
};
