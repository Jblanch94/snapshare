import { Response } from 'express';
import { FavoriteService } from '../services/favorite';

export class FavoriteController {
  favoriteService: FavoriteService;
  constructor() {
    this.favoriteService = new FavoriteService();
  }

  // function that retrieves all of the user's favorited posts
  fetchFavoritedPosts = async (req: any, res: Response) => {
    const { user_id } = req.user;

    try {
      const favoritedPosts = await this.favoriteService.fetchFavoritedPosts(
        user_id
      );
      res.json(favoritedPosts);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };

  //TODO: ADD ERROR CHECKING SO USER CANT FAVORITE THE SAME POST MORE THAN ONCE
  // function that adds a post to a user's favorited collection
  createFavoritedPost = async (req: any, res: Response) => {
    try {
      const { user_id } = req.user;
      const { id } = req.params;

      const favoritedPost = await this.favoriteService.createFavoritedPost(
        user_id,
        id
      );
      res.json(favoritedPost);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };

  // deleted a favorited post for a specific user
  deleteFavoritedPost = async (req: any, res: Response) => {
    const { id } = req.params;
    const { user_id } = req.user;

    try {
      await this.favoriteService.deleteFavoritedPost(user_id, id);
      res.json('Removed post from favorites');
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };
}
