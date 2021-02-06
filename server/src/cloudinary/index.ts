import cloudinary from 'cloudinary';
import { keys } from '../config/keys';

export const setupCloudinaryConfig = () => {
  cloudinary.v2.config({});
};
