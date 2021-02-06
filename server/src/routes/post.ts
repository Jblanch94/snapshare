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
} catch (error) {
  console.error(error.message);
}

export { router };
