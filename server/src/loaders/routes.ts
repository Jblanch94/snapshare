import { Express } from 'express';
import { router as authRoutes } from '../routes/auth';
import { router as userRoutes } from '../routes/user';
import { router as postRoutes } from '../routes/post';
import { router as commentRoutes } from '../routes/comment';
import { router as favoriteRoutes } from '../routes/favorite';
import { router as albumRoutes } from '../routes/album';

export const loadRoutes = (app: Express) => {
  const url = '/snapshare/api';
  app.use(`${url}/auth`, authRoutes);
  app.use(`${url}/user`, userRoutes);
  app.use(`${url}/post`, postRoutes);
  app.use(`${url}/comment`, commentRoutes);
  app.use(`${url}/favorite`, favoriteRoutes);
  app.use(`${url}/album`, albumRoutes);
};
