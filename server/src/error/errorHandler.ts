import { ApiError } from './apiError';
import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';

export const errorHanlder: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(err.message);
  }

  res.status(500).json('Server Error');
};
