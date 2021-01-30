import express, { Express } from 'express';
import { sequelize } from './services/DatabaseService';
import { Associations } from './models/models.associations';

class App {
  app: Express;
  constructor() {
    this.app = express();
  }

  async start(): Promise<void> {
    const PORT = process.env.PORT || 5000;

    const db = sequelize.getInstance;

    // Create models and relationships
    const associations = new Associations(db);

    try {
      associations.setupRelations();
      await db.sync();

      // load in middlewares

      // load in routes

      // start server
      this.app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
      });
    } catch (error) {
      console.error(error.message);
    }
  }
}

export { App };
