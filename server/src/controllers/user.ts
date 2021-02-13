import { Response, NextFunction } from 'express';
import { UserService } from '../services/user';
import { ApiError } from '../error/apiError';

export class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  fetchUser = async (req: any, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return next(ApiError.unauthenticated('Not Authenticated!'));
      }

      const user = await this.userService.fetchUserById(req.user.user_id);
      res.json(user);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  deleteUser = async (req: any, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return next(ApiError.unauthenticated('Not Authenticated!'));
      }

      const deletedUser = await this.userService.deleteUserById(
        req.user.user_id
      );
      res.json('Your profile has been deleted!');
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };
}
