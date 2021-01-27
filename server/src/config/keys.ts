import { devKeys } from './devKeys';

let keys: {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
};

if (process.env.NODE_ENV === 'production') {
} else {
  keys = devKeys;
}

export { keys };
