import { sequelize } from '../services/DatabaseService';
import { DataTypes, NOW } from 'sequelize';
import { Post } from './Post';
import { Album } from './Album';

const db = sequelize.getInstance;

const Album_Post = db.define(
  'AlbumsPosts',
  {
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: 'id',
      },
      primaryKey: false,
      onDelete: 'CASCADE',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    album_id: {
      primaryKey: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: Album,
        key: 'id',
      },
    },
  },
  {
    underscored: true,
    updatedAt: false,
  }
);

export { Album_Post };
