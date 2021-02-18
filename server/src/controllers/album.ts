import { Response, NextFunction } from 'express';
import { AlbumService } from '../services/album';
import { ApiError } from '../error/apiError';

export class AlbumController {
  albumService: AlbumService;
  constructor() {
    this.albumService = new AlbumService();
  }

  // function that creates a new album for a user
  createAlbum = async (req: any, res: Response, next: NextFunction) => {
    const { title } = req.body;
    const { user_id } = req.user;

    try {
      const album = await this.albumService.createAlbum(user_id, title);
      res.json(album.dataValues);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // function that edits the name of an album
  editAlbum = async (req: any, res: Response, next: NextFunction) => {
    const { title } = req.body;
    const { id } = req.params;

    if (!title) {
      return next(ApiError.badRequest('Missing title for album!'));
    }

    try {
      const [updates] = await this.albumService.editAlbum(title, id);
      if (updates < 1) {
        throw { message: 'No updates were performed' };
      }

      res.json('Updated album successfully!');
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // controller that inserts a post from the current user into the album
  insertPostIntoAlbum = async (req: any, res: Response, next: NextFunction) => {
    const { albumId, postId } = req.params;
    const { user_id } = req.user;

    try {
      const postInAlbum = await this.albumService.insertPostIntoAlbum(
        albumId,
        postId,
        user_id
      );
      res.json(postInAlbum.dataValues);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // controller that deletes a post from a specified album
  deletePostFromAlbum = async (req: any, res: Response, next: NextFunction) => {
    const { albumId, postId } = req.params;

    try {
      const deletedPost = await this.albumService.deletePostFromAlbum(
        albumId,
        postId
      );
      res.json({
        message: 'Successfully removed post from album',
        details: deletedPost,
      });
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // function that fetchs the posts in album, returns the key for the post id
  fetchPostsInAlbum = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
      const postsInAlbum = await this.albumService.fetchPostsInAlbum(id);
      res.json(postsInAlbum);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // function that deletes an album and it's contents
  deleteAlbum = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const numDeletedAlbums = await this.albumService.deleteAlbum(id);
      if (numDeletedAlbums < 1) {
        return next(
          ApiError.notFound(
            'The album you are trying to delete does not exist!'
          )
        );
      }
      res.json('Successfully deleted Album');
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };
}
