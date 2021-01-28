import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const Favorite = db.define(
  'Favorite',
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
      onDelete: 'CASCADE',
      primaryKey: false,
    },
  },
  {
    updatedAt: false,
    createdAt: 'created_at',
    underscored: true,
  }
);

export { Favorite };
