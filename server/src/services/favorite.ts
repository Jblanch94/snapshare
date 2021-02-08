import { Favorite } from '../models/Favorite';
import { User } from '../models/User';

export class FavoriteService {
  // function that creates a favorited post given the post id and user id
  async createFavoritedPost(user_id: string, post_id: string) {
    try {
      const favoritedPost = await Favorite.create({
        post_id,
        user_id,
      });
      return favoritedPost;
    } catch (err) {
      return err;
    }
  }

  // function that deletes a favorited post by a specific user and post
  async deleteFavoritedPost(user_id: string, post_id: string) {
    try {
      const deletedFavoritePost = await Favorite.destroy({
        where: {
          post_id,
          user_id,
        },
      });
      return deletedFavoritePost;
    } catch (err) {
      return err;
    }
  }

  // function that fetches all of the user's favorited posts
  async fetchFavoritedPosts(user_id: string) {
    try {
      const favoritedPosts = await Favorite.findAll({
        include: User,
        where: {
          user_id,
        },
      });
      return favoritedPosts;
    } catch (err) {
      return err;
    }
  }
}
