import { Response, NextFunction } from 'express';
import { ApiError } from '../error/apiError';
import { CommentService } from '../services/comment';

export class CommentController {
  commentService: CommentService;
  constructor() {
    this.commentService = new CommentService();
  }

  createComment = async (req: any, res: Response, next: NextFunction) => {
    const { contents } = req.body;
    const { id } = req.params;
    const { user_id } = req.user;

    // call method to insert a new comment with the contents, user id and post id
    try {
      const comment = await this.commentService.createComment(
        contents,
        id,
        user_id
      );

      // if there is a validation error
      if (comment.errors) {
        return next(ApiError.badRequest(comment.errors.message));
      }

      res.json(comment.dataValues);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  fetchComments = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const comments = await this.commentService.fetchCommentsById(id);
      res.json(comments);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };
}
