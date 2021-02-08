import { Response } from 'express';
import { CommentService } from '../services/comment';

export class CommentController {
  commentService: CommentService;
  constructor() {
    this.commentService = new CommentService();
  }

  createComment = async (req: any, res: Response) => {
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
        throw comment.errors;
      }

      res.json(comment.dataValues);
    } catch (err) {
      console.error(err[0].message);
      res.status(500).json(err[0].message);
    }
  };

  fetchComments = async (req: any, res: Response) => {
    const { id } = req.params;

    try {
      const comments = await this.commentService.fetchCommentsById(id);
      res.json(comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };
}
