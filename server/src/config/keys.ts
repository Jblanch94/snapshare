import { devKeys } from "./devKeys";

let keys: {
  user: any;
  host: any;
  database: any;
  password: any;
  port: any;
  jwt_secret: any;
  cloudinary_cloud_name: any;
  cloudinary_api_secret: any;
  cloudinary_api_key: any;
};

if (process.env.NODE_ENV === "production") {
  keys = devKeys;
} else {
  keys = devKeys;
}

export { keys };
