import { Request, Response, NextFunction } from 'express';
import cloudinary from 'cloudinary';
import { keys } from '../config/keys';
import { PostService } from '../services/post';
import { ApiError } from '../error/apiError';
import { unlinkAsync } from '../utils/removeFile';

export class PostController {
  config: void;
  postService: PostService;
  constructor() {
    this.config = cloudinary.v2.config({
      cloud_name: keys.cloudinary_cloud_name,
      api_key: keys.cloudinary_api_key,
      api_secret: keys.cloudinary_api_secret,
    });
    this.postService = new PostService();
  }

  // function that stores image and creates a new post, tags and associate tags with the model
  createPost = async (req: any, res: Response, next: NextFunction) => {
    const { title, description, tags } = req.body;
    const { user_id } = req.user;

    if (!title || !description || tags.length === 0) {
      return next(ApiError.badRequest('Missing Post Information!'));
    }

    // call method to send image off to cloudinary and get url back
    try {
      const { url } = await cloudinary.v2.uploader.upload(req.file.path, {
        public_id: `Snapshare/Dev/posts/${req.file.originalname}`,
        overwrite: true,
      });

      // remove temporary after upload is complete
      await unlinkAsync(req.file.path);

      // call method to create a new post
      const post = await this.postService.createPost({
        title,
        description,
        img: url,
        tags,
        user_id,
      });

      res.status(201).json(post);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // function that deletes a post by the id provided if the user created the original post
  deletePost = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { user_id } = req.user;

    try {
      // fetch post by id
      const post = await this.postService.fetchPostById(id);

      // if author id and current user id don't match then respond can't delete post it is not your own
      if (post.getDataValue('user_id') !== user_id) {
        return next(
          ApiError.badRequest("Can't delete post, this is not your post!")
        );
      }

      // call function to delete post
      await this.postService.deletePostById(id);

      res.json('Successfully deleted post!');
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  updatePost = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { user_id } = req.user;
    const { title, description } = req.body;

    if (title === undefined && description === undefined) {
      return next(
        ApiError.badRequest(
          'You must provide at least one update for the title or description!'
        )
      );
    }

    try {
      // fetch post by id
      const post = await this.postService.fetchPostById(id);

      // if author id and current user id don't match then respond can't update post it is not your own
      if (post.getDataValue('user_id') !== user_id) {
        return next(
          ApiError.badRequest("Can't delete post, this is not your post!")
        );
      }

      await this.postService.updatePost(id, {
        title,
        description,
      });
      res.json('Post was successfully updated');
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  upvotePost = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { user_id } = req.user;

    try {
      const upvote = await this.postService.upvotePost(id, user_id);
      res.status(201).json(upvote);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  // function that will fetch a post by id
  fetchPostById = async (req: any, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const post = await this.postService.fetchPostById(id);
      res.json(post.dataValues);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };

  //TODO: NEED TO TEST WITH DIFFERENT TAGS, TITLES AND DESCRIPTIONS TO SEE IF WORKS PROPERLY
  // function that will retrieve all posts with pagination with optional search term
  fetchPosts = async (req: any, res: Response, next: NextFunction) => {
    const { limit, page, term } = req.query;
    try {
      const posts = await this.postService.fetchPosts(
        parseInt(limit),
        parseInt(page),
        term
      );

      res.json(posts);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  };
}
