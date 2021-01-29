import { sequelize } from '../services/DatabaseService';
import { DataTypes, NOW } from 'sequelize';

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

const queryInterface = db.getQueryInterface();
queryInterface.addConstraint('Albums_Posts', {
  type: 'unique',
  fields: ['album_id', 'post_id'],
});

export { Album_Post };
