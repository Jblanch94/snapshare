import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const Post_Tag = db.define(
  'Posts_Tags',
  {
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'id',
      },
      primaryKey: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
      },
      primaryKey: false,
    },
  },
  {
    updatedAt: false,
    createdAt: false,
    underscored: true,
  }
);

export { Post_Tag };
