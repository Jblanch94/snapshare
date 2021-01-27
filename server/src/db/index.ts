import { Pool } from 'pg';
import { keys } from '../config/keys';

let pool: any;

if (process.env.NODE_ENV === 'production') {
} else {
  pool = new Pool({
    user: keys.user,
    host: keys.host,
    database: keys.database,
    password: keys.password,
    port: keys.port,
  });
}

export { pool };
