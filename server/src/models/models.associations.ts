import { Sequelize } from 'sequelize/types';
import * as models from './';

export class Associations {
  db: Sequelize;
  constructor(db: Sequelize) {
    this.db = db;
  }

  setupRelations(): void {
    // set up relation between user and post
    models.User.hasMany(models.Post);
    models.Post.belongsTo(models.User, { foreignKey: { name: 'user_id' } });

    // set up relation between tags and posts
    models.Tag.belongsToMany(models.Post, {
      through: models.Post_Tag,
      foreignKey: 'tag_id',
    });
    models.Post.belongsToMany(models.Tag, {
      through: models.Post_Tag,
      foreignKey: 'post_id',
    });
    models.Post_Tag.belongsTo(models.Post);
    models.Post_Tag.belongsTo(models.Tag);
    models.Post.hasMany(models.Post_Tag);
    models.Tag.hasMany(models.Post_Tag);

    // set up relation between comments, post and user
    models.User.hasMany(models.Comment);
    models.Post.hasMany(models.Comment);
    models.Comment.belongsTo(models.User);
    models.Comment.belongsTo(models.Post);

    // set up relation between favorite with post and user
    models.User.belongsToMany(models.Post, {
      through: models.Favorite,
      foreignKey: 'post_id',
    });
    models.Post.belongsToMany(models.User, {
      through: models.Favorite,
      foreignKey: 'user_id',
    });
    models.User.hasMany(models.Favorite);
    models.Post.hasMany(models.Favorite);
    models.Favorite.belongsTo(models.User);
    models.Favorite.belongsTo(models.Post);

    // set up relation between user and album
    models.User.hasMany(models.Album);
    models.Album.belongsTo(models.User);

    // set up relation between post and album
    models.Post.belongsToMany(models.Album, {
      through: models.Album_Post,
      foreignKey: 'post_id',
    });
    models.Album.belongsToMany(models.Post, {
      through: models.Album_Post,
      foreignKey: 'album_id',
    });
    models.Album.hasMany(models.Album_Post);
    models.Post.hasMany(models.Album_Post);
    models.Album_Post.belongsTo(models.Post);
    models.Album_Post.belongsTo(models.Album);

    // set up relation between upvotes with post and user
    models.User.belongsToMany(models.Post, {
      through: models.Upvote,
      foreignKey: 'user_id',
    });
    models.Post.belongsToMany(models.User, {
      through: models.Upvote,
      foreignKey: 'post_id',
    });
    models.User.hasMany(models.Upvote);
    models.Post.hasMany(models.Upvote);
    models.Upvote.belongsTo(models.Post);
    models.Upvote.belongsTo(models.User);
  }
}
