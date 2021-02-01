import { Secret } from 'jsonwebtoken';
import { devKeys } from './devKeys';

let keys: {
  user: string | undefined;
  host: string | undefined;
  database: string | undefined;
  password: string | undefined;
  port: string | undefined;
  jwt_secret: any;
};

if (process.env.NODE_ENV === 'production') {
  keys = devKeys;
} else {
  keys = devKeys;
}

export { keys };
