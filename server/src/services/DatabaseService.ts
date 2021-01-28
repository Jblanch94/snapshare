import { Sequelize } from 'sequelize/types';
import { sequelize } from '../db';

class DatabaseService {
  private static instance: Sequelize;

  private constructor() {}

  static get getInstance() {
    if (!this.instance) {
      try {
        this.instance = sequelize;
      } catch (err) {
        console.error(err.message);
      }
    }
    return this.instance;
  }
}

export { DatabaseService as sequelize };
