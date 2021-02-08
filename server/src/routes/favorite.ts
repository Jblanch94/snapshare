import { Router } from 'express';
import { authorization } from '../middleware/authorization';
import { FavoriteController } from '../controllers/favorite';

const router = Router();
const favoriteController = new FavoriteController();

// retrieve all of the posts the user favorited
router.get('/', authorization, favoriteController.fetchFavoritedPosts);

// add a post to the favorited collection
router.post('/post/:id', authorization, favoriteController.createFavoritedPost);

// remove a post from the user's favorited collection
router.delete(
  '/post/:id',
  authorization,
  favoriteController.deleteFavoritedPost
);

export { router };
