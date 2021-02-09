import { Response } from 'express';
import { AlbumService } from '../services/album';

export class AlbumController {
  albumService: AlbumService;
  constructor() {
    this.albumService = new AlbumService();
  }

  // function that creates a new album for a user
  createAlbum = async (req: any, res: Response) => {
    const { title } = req.body;
    const { user_id } = req.user;

    try {
      const album = await this.albumService.createAlbum(user_id, title);
      res.json(album.dataValues);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };

  // function that edits the name of an album
  editAlbum = async (req: any, res: Response) => {
    const { title } = req.body;
    const { id } = req.params;

    if (!title) {
      return res.status(400).json('Missing title');
    }

    try {
      const [updates] = await this.albumService.editAlbum(title, id);
      if (updates < 1) {
        throw { message: 'No updates were performed' };
      }

      res.json('Updated album successfully!');
    } catch (err) {
      console.error(err.message);
      res.status(500).json(err.message);
    }
  };

  //TODO: ADD ERROR HANDLING FOR TRYING TO ALLOW TWO OF THE SAME POST IN THE SAME ALBUM
  // controller that inserts a post from the current user into the album
  insertPostIntoAlbum = async (req: any, res: Response) => {
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
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };

  // controller that deletes a post from a specified album
  deletePostFromAlbum = async (req: any, res: Response) => {
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
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };

  // function that fetchs the posts in album, returns the key for the post id
  fetchPostsInAlbum = async (req: any, res: Response) => {
    const { id } = req.params;

    try {
      const postsInAlbum = await this.albumService.fetchPostsInAlbum(id);
      res.json(postsInAlbum);
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };

  // function that deletes an album and it's contents
  deleteAlbum = async (req: any, res: Response) => {
    const { id } = req.params;
    try {
      const deletedAlbum = await this.albumService.deleteAlbum(id);
      console.log(deletedAlbum);
      res.json({});
    } catch (err) {
      console.error(err.message);
      res.status(500).json('Server Error');
    }
  };
}
