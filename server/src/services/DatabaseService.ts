import { pool } from '../db';

class DatabaseService {
  private static instance: DatabaseService;

  private constructor() {}

  static get getInstance() {
    if (!this.instance) {
      try {
        this.instance = pool;
      } catch (err) {
        console.error(err.message);
      }
    }
    return this.instance;
  }
}

export { DatabaseService };
