import jwt from 'jsonwebtoken';
import { keys } from '../config/keys';

export const jwtGenerator = (
  payload: { user_id: string },
  time: string | number | undefined
) => {
  console.log(time);
  const token = jwt.sign(payload, keys.jwt_secret, { expiresIn: time });
  return token;
};
