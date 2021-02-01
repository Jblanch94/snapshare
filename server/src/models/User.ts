import { sequelize } from '../services/DatabaseService';
import { DataTypes, NOW } from 'sequelize';
import bcrypt from 'bcrypt';

const db = sequelize.getInstance;

const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'You need to provide your first name',
        },
      },
    },
    last_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notNull: {
          msg: 'You need to provide your last name',
        },
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'You need to provide a valid email',
        },
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        min: 6,
        max: 100,
      },
    },
    img: {
      type: DataTypes.STRING(500),
      defaultValue: '',
    },
  },
  {
    updatedAt: false,
    underscored: true,
    hooks: {
      beforeCreate: async (user: any) => {
        try {
          const password = user.getDataValue('password');
          const hashedPassword = await bcrypt.hash(password, 10);
          user.password = hashedPassword;
        } catch (err) {
          console.error(err.message);
          return err;
        }
      },
    },
  }
);

export { User };
