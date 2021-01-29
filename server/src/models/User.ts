import { sequelize } from '../services/DatabaseService';
import { DataTypes } from 'sequelize';

const db = sequelize.getInstance;

const User = db.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
        is:
          '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{6}$',
      },
    },
    img: {
      type: DataTypes.STRING(500),
      defaultValue: '',
    },
  },
  {
    updatedAt: false,
    createdAt: 'created_at',
    underscored: true,
  }
);

User.addHook('beforeCreate', (user, options) => {
  // logic to hash the password
});

export { User };
