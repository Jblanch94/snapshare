import dotenv from 'dotenv';
dotenv.config();

export const devKeys = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  jwt_secret: process.env.JWT_SECRET,
};
