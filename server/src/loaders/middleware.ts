import { Express } from 'express';
import cookieParser from 'cookie-parser';

export const loadMiddleware = (app: Express, express: any) => {
  app.use(express.json());
  app.use(cookieParser());
};
