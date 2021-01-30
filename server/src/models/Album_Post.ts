import { sequelize } from '../services/DatabaseService';
import { DataTypes, NOW } from 'sequelize';

const db = sequelize.getInstance;

const Album_Post = db.define(
  'AlbumsPosts',
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
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
  }
);

export { Album_Post };
