import express, { Express } from 'express';
import { sequelize } from './services/DatabaseService';
import { ModelAssociations } from './utils/models.associations';

class App {
  app: Express;
  constructor() {
    this.app = express();
  }

  start(): void {
    const PORT = process.env.PORT || 5000;

    const db = sequelize.getInstance;

    // Create models and relationships
    new ModelAssociations(db).setupRelations();
    db.sync({ force: true });

    // load in middlewares

    // load in routes

    // start server
    this.app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  }
}

export { App };
