import { Model } from 'sequelize/types';
import { User } from '../models/User';

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  img?: string;
}

export class UserService {
  // retrieve user by email
  async fetchUserByEmail(email: string): Promise<Model<any, any> | null> {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      return user;
    } catch (err) {
      return err;
    }
  }

  // register new user
  async registerUser(data: UserData) {
    try {
      const user = await User.create(data);
      return user;
    } catch (err) {
      return err;
    }
  }
}
