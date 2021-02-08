import { Comment } from '../models/Comment';

export class CommentService {
  // function that creates a new comment
  async createComment(comment: string, post_id: string, user_id: string) {
    try {
      const newComment = await Comment.create({
        contents: comment,
        post_id,
        user_id,
      });
      return newComment;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  // function that retrieves comments for a specific post
  async fetchCommentsById(id: string) {
    try {
      const comments = await Comment.findAll({
        where: {
          post_id: id,
        },
      });
      return comments;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }
}
