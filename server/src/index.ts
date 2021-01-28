import express from 'express';
import { sequelize } from './services/DatabaseService';

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
