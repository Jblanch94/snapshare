import { Router } from 'express';
import { authorization } from '../middleware/authorization';
import { CommentController } from '../controllers/comment';

const router = Router();
const commentController = new CommentController();

// Route to create a new comment on a specific post
router.post('/post/:id', authorization, commentController.createComment);

// Route to retrieve all the comments for a specific post
router.get('/post/:id', commentController.fetchComments);

export { router };
