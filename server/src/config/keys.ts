import { devKeys } from "./devKeys";

let keys: {
  user: any;
  host: any;
  database: any;
  password: any;
  port: any;
  jwt_secret: any;
};

if (process.env.NODE_ENV === "production") {
  keys = devKeys;
} else {
  keys = devKeys;
}

export { keys };
