import { Router } from 'express';
import { authorization } from '../middleware/authorization';
import { PostController } from '../controllers/post';
import multer from 'multer';

const router = Router();
const upload = multer({
  dest: 'uploads/',
});
const postController = new PostController();

try {
  // Route to create a new post by a user
  router.post(
    '/',
    authorization,
    upload.single('img'),
    postController.createPost
  );

  // Route to update the title or description of a post
  router.patch('/:id', authorization, postController.updatePost);

  // Route to delete a post by the author
  router.delete('/:id', authorization, postController.deletePost);

  // Route to upvote a post
  router.post('/:id/upvote', authorization, postController.upvotePost);

  // Route to fetch a post by id
  router.get('/:id', postController.fetchPostById);

  // Route to fetch posts, includes pagination
  router.get('/', postController.fetchPosts);
} catch (error) {
  console.error(error.message);
}

export { router };
