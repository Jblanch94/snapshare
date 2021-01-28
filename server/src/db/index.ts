import { Sequelize } from 'sequelize';
import { keys } from '../config/keys';

let sequelize: Sequelize;

if (process.env.NODE_ENV === 'production') {
} else {
  sequelize = new Sequelize(keys.database, keys.user, keys.password, {
    host: keys.host,
    dialect: 'postgres',
  });
}

export { sequelize };
