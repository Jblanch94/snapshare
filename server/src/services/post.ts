import { sequelize } from '../db';
import { Post } from '../models/Post';
import { Tag } from '../models/Tag';
import { Post_Tag } from '../models/Post_Tag';
import { Upvote } from '../models/Upvote';

interface PostData {
  title: string;
  description: string;
  img: string;
  tags: string[];
  user_id: string;
}

export class PostService {
  async createPost(data: PostData) {
    const trx = await sequelize.transaction();
    try {
      // store data from post into post model
      const post = await Post.create({
        title: data.title,
        description: data.description,
        img: data.img,
        user_id: data.user_id,
      });

      await this.createOrFindTagsAndInsertIntoPostTags(
        data.tags,
        post.getDataValue('id')
      );

      // commit changes to database after everything passed without error
      await trx.commit();
      return post;
    } catch (err) {
      console.error(err);
      await trx.rollback();
      return err;
    }
  }

  async createOrFindTagsAndInsertIntoPostTags(tags: string[], post_id: string) {
    try {
      // store tags in tag and tag_post models
      for (let i = 0; i < tags.length; i++) {
        // Fetch the tag by title or create a new tag if it does not exist
        const [currentTag] = await Tag.findOrCreate({
          where: {
            title: tags[i],
          },
        });

        // store tag id and post id in the junction model for post_tag
        await Post_Tag.create({
          post_id,
          tag_id: currentTag.getDataValue('id'),
        });
      }
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  async fetchPostById(id: string) {
    try {
      const post = await Post.findOne({
        where: {
          id: id,
        },
      });
      return post;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  async deletePostById(id: string) {
    try {
      await Post.destroy({
        where: {
          id: id,
        },
      });
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  async updatePost(
    id: string,
    data: { description: string | undefined; title: string | undefined }
  ) {
    try {
      const post = await Post.update(
        { title: data?.title, description: data?.description },
        {
          where: {
            id: id,
          },
        }
      );

      return post;
    } catch (err) {
      console.error(err.message);
      return err;
    }
  }

  async upvotePost(post_id: string, user_id: string) {
    try {
      const upvote = await Upvote.create({
        post_id,
        user_id,
      });
      return upvote;
    } catch (err) {
      return err;
    }
  }
}
