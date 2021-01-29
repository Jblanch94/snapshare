import { sequelize } from '../services/DatabaseService';
import { DataTypes, NOW } from 'sequelize';

const db = sequelize.getInstance;

const Comment = db.define(
  'Comment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    contents: {
      type: DataTypes.STRING(800),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide content for the comment',
        },
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id',
      },
      primaryKey: false,
      onDelete: 'CASCADE',
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
      primaryKey: false,
      onDelete: 'CASCADE',
    },
  },
  {
    underscored: true,
  }
);

export { Comment };
