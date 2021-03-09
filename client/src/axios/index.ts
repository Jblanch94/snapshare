import { AxiosInstance, AxiosResponse } from 'axios';
import { auth } from './auth';
import { user } from './user';
import { post } from './post';

export { auth, user, post };

export class AxiosUtility {
  instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.instance = instance;
  }

  // Different methods for different types of http requests
  get(url: string, config: any): Promise<AxiosResponse<any>> {
    try {
      const response = this.instance.get(url, config);
      return response;
    } catch (err) {
      return err;
    }
  }

  post(url: string, values: any): Promise<AxiosResponse<any>> {
    try {
      const response = this.instance.post(url, values);
      return response;
    } catch (err) {
      return err;
    }
  }

  patch(url: string, values: any): Promise<AxiosResponse<any>> {
    try {
      const response = this.instance.patch(url, values);
      return response;
    } catch (err) {
      return err;
    }
  }

  delete(url: string): Promise<AxiosResponse<any>> {
    try {
      const response = this.instance.delete(url);
      return response;
    } catch (err) {
      return err;
    }
  }
}
