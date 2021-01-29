import express from 'express';
import { Model, QueryTypes } from 'sequelize';
import { sequelize } from './services/DatabaseService';
import { ModelAssociations } from './utils/models.associations';

const app = express();

const PORT = process.env.PORT || 5000;

const db = sequelize.getInstance;

const associations = new ModelAssociations(db);

associations.setupRelations();
db.sync({ force: true });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
