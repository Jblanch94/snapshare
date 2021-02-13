import express, { Express } from 'express';
import { loadMiddleware } from './loaders/middleware';
import { loadRoutes } from './loaders/routes';
import { sequelize } from './services/DatabaseService';
import { Associations } from './models/models.associations';
import { errorHanlder } from './error/errorHandler';

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
      loadMiddleware(this.app, express);

      // load in routes
      loadRoutes(this.app);

      // load in error handler
      this.app.use(errorHanlder);

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
