import { Response, NextFunction } from 'express';
import { decodeToken } from '../utils/validToken';
import { ApiError } from '../error/apiError';

export const authorization = (req: any, res: Response, next: NextFunction) => {
  // get the token from the header
  const token = req['headers'].authorization?.split(' ')[1];

  // if no token then respond with not authenticated
  if (!token) {
    return res.status(401).json('Not Authenticated!');
  }

  // compare the token to see if it is valid
  try {
    const decoded = decodeToken(token);

    if (decoded.message) {
      throw decoded;
    }

    if (!decoded) {
      throw { message: 'Not Authorized' };
    }
    req.user = decoded;
    next();
  } catch (err) {
    next(ApiError.badRequest(err.message));
  }
};
