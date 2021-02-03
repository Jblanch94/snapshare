import express, { Express } from "express";
import cookieParser from "cookie-parser";
import { sequelize } from "./services/DatabaseService";
import { Associations } from "./models/models.associations";
import { router as authRoutes } from "./routes/auth";
import { router as userRoutes } from "./routes/user";

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
    const url = "/snapshare/api";

    try {
      associations.setupRelations();
      // await db.sync();

      // load in middlewares
      this.app.use(express.json());
      this.app.use(cookieParser());

      // load in routes
      this.app.use(`${url}/auth`, authRoutes);
      this.app.use(`${url}/user`, userRoutes);

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
