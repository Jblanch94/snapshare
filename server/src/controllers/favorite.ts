import { Response, NextFunction } from 'express';
import { FavoriteService } from '../services/favorite';
import { ApiError } from '../error/apiError';

export class FavoriteController {
  favoriteService: FavoriteService;
  constructor() {
    this.favoriteService = new FavoriteService();
  }

  // function that retrieves all of the user's favorited posts
  fetchFavoritedPosts = async (req: any, res: Response, next: NextFunction) => {
    const { user_id } = req.user;

    try {
      const favoritedPosts = await this.favoriteService.fetchFavoritedPosts(
        user_id
      );
      res.json(favoritedPosts);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // function that adds a post to a user's favorited collection
  createFavoritedPost = async (req: any, res: Response, next: NextFunction) => {
    try {
      const { user_id } = req.user;
      const { id } = req.params;

      const favoritedPost = await this.favoriteService.createFavoritedPost(
        user_id,
        id
      );

      if (favoritedPost.errors) {
        return next(
          ApiError.badRequest('You have already favorited this post!')
        );
      }

      res.json(favoritedPost);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // deleted a favorited post for a specific user
  deleteFavoritedPost = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { user_id } = req.user;

    try {
      const numFavoritedPostsDeleted = await this.favoriteService.deleteFavoritedPost(
        user_id,
        id
      );

      if (numFavoritedPostsDeleted < 1) {
        return next(
          ApiError.notFound('Post you want to unfavorite does not exist!')
        );
      }

      res.json('Removed post from favorites');
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };
}
