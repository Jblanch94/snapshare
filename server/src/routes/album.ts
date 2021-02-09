import { Router } from 'express';
import { authorization } from '../middleware/authorization';
import { AlbumController } from '../controllers/album';

const router = Router();
const albumController = new AlbumController();

// route to create a new album for a specific user
router.post('/', authorization, albumController.createAlbum);

// route to change the name of album
router.patch('/:id', authorization, albumController.editAlbum);

// route to delete an album
router.delete('/:id', authorization, albumController.deleteAlbum);

// route to insert a post into album
router.post(
  '/:albumId/post/:postId',
  authorization,
  albumController.insertPostIntoAlbum
);

// route to delete a post from an album
router.delete(
  '/:albumId/post/:postId',
  authorization,
  albumController.deletePostFromAlbum
);

// route to fetch all posts for a particular album
router.get('/:id', albumController.fetchPostsInAlbum);

export { router };
