import { Model } from "sequelize/types";
import { User } from "../models/User";
import bcrypt from "bcrypt";

interface UserRegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  img?: string;
}

interface UserLoginData {
  email: string;
  password: string;
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
  async registerUser(data: UserRegisterData) {
    try {
      const user = await User.create(data);
      return user;
    } catch (err) {
      return err;
    }
  }

  async loginUser(data: UserLoginData) {
    try {
      // fetch user by email
      const userByEmail = await this.fetchUserByEmail(data.email);

      // if no user by email provided then throw error
      if (!userByEmail) {
        throw { message: "Incorrect login credentials" };
      }

      // check if the password matches the hashed password with the user associated with the email
      const validPassword = await bcrypt.compare(
        data.password,
        userByEmail.getDataValue("password")
      );
      if (!validPassword) {
        throw { message: "Incorrect login credentials" };
      }
      return userByEmail;
    } catch (err) {
      return err;
    }
  }
}
