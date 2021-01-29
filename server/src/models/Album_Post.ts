import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const Album_Post = db.define(
  'Albums_Posts',
  {
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id',
      },
      onDelete: 'CASCADE',
      primaryKey: false,
    },
    album_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Album',
        key: 'id',
      },
    },
  },
  {
    underscored: true,
    updatedAt: false,
    createdAt: 'created_at',
  }
);

const queryInterface = db.getQueryInterface();
queryInterface.addConstraint('Albums_Posts', {
  type: 'unique',
  fields: ['album_id', 'post_id'],
});

export { Album_Post };
