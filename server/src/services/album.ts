import { Album } from '../models/Album';
import { Post } from '../models/Post';
import { Album_Post } from '../models/Album_Post';

export class AlbumService {
  // function that creates a new Album instance with the current user and provided title
  async createAlbum(user_id: string, title: string) {
    try {
      const album = await Album.create({
        title,
        user_id,
      });
      return album;
    } catch (err) {
      return err;
    }
  }

  // function that edits an album's name with a corresponding id
  async editAlbum(title: string, id: string) {
    try {
      const album = await Album.update(
        { title },
        {
          where: {
            id,
          },
        }
      );
      return album;
    } catch (err) {
      return err;
    }
  }

  // function that inserts a post into the user's corresponding album
  async insertPostIntoAlbum(
    album_id: string,
    post_id: string,
    user_id: string
  ) {
    try {
      // assert the author of the post id matches the current user
      const post = await Post.findAll({
        where: {
          id: post_id,
          user_id,
        },
      });

      if (!post.length) {
        throw {
          message: 'This post either does not exist or was not created by you!',
        };
      }

      // if passes then the author is the same and we can add post into corresponding album
      const album_post = await Album_Post.create({
        post_id,
        album_id,
      });
      return album_post;
    } catch (err) {
      return err;
    }
  }

  // function that deletes a post from a user's album
  async deletePostFromAlbum(album_id: string, post_id: string) {
    try {
      const deletedPost = await Album_Post.destroy({
        where: {
          post_id,
          album_id,
        },
      });
      return deletedPost;
    } catch (err) {
      return err;
    }
  }

  // function that fetchs all the posts for a given album
  async fetchPostsInAlbum(album_id: string) {
    try {
      const posts = await Album_Post.findAll({
        where: {
          album_id,
        },
      });
      return posts;
    } catch (err) {
      return err;
    }
  }

  async deleteAlbum(album_id: string) {
    try {
      const deletedAlbum = await Album.destroy({
        where: {
          id: album_id,
        },
      });
      return deletedAlbum;
    } catch (err) {
      return err;
    }
  }
}
