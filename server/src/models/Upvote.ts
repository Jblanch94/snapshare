import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const Upvote = db.define(
  'Upvote',
  {
    post_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Post',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: false,
      onDelete: 'CASCADE',
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    underscored: true,
  }
);

const queryInterface = db.getQueryInterface();
queryInterface.addConstraint('Upvote', {
  type: 'unique',
  fields: ['user_id', 'post_id'],
});

export { Upvote };
