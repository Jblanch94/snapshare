import { Request, Response } from "express";
import { UserService } from "../services/user";
import { jwtGenerator } from "../utils/jwtGenerator";

export class AuthController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  registerUser = async (req: Request, res: Response) => {
    // validate we received the proper params in the body
    const { first_name, last_name, email, password, img } = req.body;

    // the only param not required is img, but if provided works as well
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json("Missing registration information");
    }

    try {
      // fetch user by email and respond if email already exists
      let user = await this.userService.fetchUserByEmail(email);
      if (user) {
        return res.status(400).json("Email already exists!");
      }

      // create new user with information provided
      const { dataValues } = await this.userService.registerUser({
        first_name,
        last_name,
        email,
        password,
      });

      //generate jwt with user id
      const token = jwtGenerator({ user_id: dataValues.id }, 60 * 10);

      // send back access token in response and refresh token in cookie
      res.cookie(
        "refreshToken",
        jwtGenerator({ user_id: dataValues.id }, 60 * 15),
        { httpOnly: true, expires: new Date(Date.now() + 60 * 15 * 1000) }
      );

      // send back token to user
      res.status(201).json({ accessToken: token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  };

  // Contorller for logging in a user
  loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // validate if the email and password were received
    if (!email || !password) {
      return res.status(400).json("Missing login information!");
    }

    try {
      // call function to login user
      const user = await this.userService.loginUser({ email, password });

      if (user.message) {
        throw user;
      }

      // user is who they say they are
      // give access and refresh token to user
      const id = user.getDataValue("id");
      const token = jwtGenerator({ user_id: id }, 60 * 10);

      res.cookie("refreshToken", jwtGenerator({ user_id: id }, 60 * 15), {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 15 * 1000),
      });
      res.json({ accessToken: token });
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
}
