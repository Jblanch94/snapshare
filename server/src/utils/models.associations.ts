import { Sequelize } from 'sequelize/types';
import * as models from '../models';

class ModelAssociations {
  db: Sequelize;
  constructor(db: Sequelize) {
    this.db = db;
  }

  setupRelations() {
    // Create relation between User and Post Model
    models.User.hasMany(models.Post);
    models.Post.belongsTo(models.User, { foreignKey: 'user_id' });

    // Create relation between Post and Tag Model
    models.Post.belongsToMany(models.Tag, {
      through: models.Post_Tag,
      foreignKey: 'post_id',
    });
    models.Tag.belongsToMany(models.Post, {
      through: models.Post_Tag,
      foreignKey: 'tag_id',
    });

    // Create relation between favorites, user and post models
    models.User.belongsToMany(models.Post, {
      through: models.Favorite,
      foreignKey: 'user_id',
    });
    models.Post.belongsToMany(models.User, {
      through: models.Favorite,
      foreignKey: 'post_id',
    });

    // Create relation between comments, user and post models
    models.User.hasMany(models.Comment, { foreignKey: 'user_id' });
    models.Comment.belongsTo(models.User);
    models.Post.hasMany(models.Comment, { foreignKey: 'post_id' });
    models.Comment.belongsTo(models.Post);

    // Create relation between user and album
    models.User.hasMany(models.Album, { foreignKey: 'user_id' });
    models.Album.belongsTo(models.User);

    // Create relation between post and album
    models.Album.belongsToMany(models.Post, {
      through: models.Album_Post,
      foreignKey: 'album_id',
    });

    models.Post.belongsToMany(models.Album, {
      through: models.Album_Post,
      foreignKey: 'post_id',
    });

    // Create relation between user, post and upvotes
    models.User.belongsToMany(models.Post, {
      through: models.Upvote,
      foreignKey: 'user_id',
    });
    models.Post.belongsToMany(models.User, {
      through: models.Upvote,
      foreignKey: 'post_id',
    });
  }
}

export { ModelAssociations };
