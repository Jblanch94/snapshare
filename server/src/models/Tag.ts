import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const Tag = db.define(
  'Tag',
  {
    id: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export { Tag };
