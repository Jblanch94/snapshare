import { sequelize } from '../services/DatabaseService';
import { DataTypes, NOW } from 'sequelize';

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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
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
    underscored: true,
  }
);

export { Favorite };
