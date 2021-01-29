import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const Post = db.define(
  'Post',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(240),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a title for the post',
        },
      },
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a description for the post',
        },
      },
    },
    img: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide an image for the post',
        },
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  },
  {
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    underscored: true,
  }
);

export { Post };
