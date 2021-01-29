import { Sequelize } from 'sequelize/types';
import * as models from '../models';

class ModelAssociations {
  db: Sequelize;
  constructor(db: Sequelize) {
    this.db = db;
  }

  async setupConstraints(): Promise<void> {
    // add constraint for Upvote table
    const queryInterface = this.db.getQueryInterface();

    try {
      await queryInterface.addConstraint('Upvote', {
        type: 'unique',
        fields: ['user_id', 'post_id'],
      });

      // add constraint for favorites table
      await queryInterface.addConstraint('Favorite', {
        type: 'unique',
        fields: ['user_id', 'post_id'],
      });

      // add constraint for albums_posts table
      await queryInterface.addConstraint('Albums_Posts', {
        type: 'unique',
        fields: ['album_id', 'post_id'],
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  setupRelations(): void {
    console.log(models.Post_Tag);
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
    models.Post_Tag.belongsTo(models.Post);
    models.Post_Tag.belongsTo(models.Tag);

    // Create relation between favorites, user and post models
    models.User.belongsToMany(models.Post, {
      through: models.Favorite,
      foreignKey: 'user_id',
    });
    models.Post.belongsToMany(models.User, {
      through: models.Favorite,
      foreignKey: 'post_id',
    });
    models.Favorite.belongsTo(models.User);
    models.Favorite.belongsTo(models.Post);

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
    models.Album_Post.belongsTo(models.Album);
    models.Album_Post.belongsTo(models.Post);

    // Create relation between user, post and upvotes
    models.User.belongsToMany(models.Post, {
      through: models.Upvote,
      foreignKey: 'user_id',
    });
    models.Post.belongsToMany(models.User, {
      through: models.Upvote,
      foreignKey: 'post_id',
    });
    models.Upvote.belongsTo(models.Post);
    models.Upvote.belongsTo(models.User);
  }
}

export { ModelAssociations };
