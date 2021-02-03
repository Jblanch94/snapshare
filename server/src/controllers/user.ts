import { Request, Response } from "express";
import { UserService } from "../services/user";

export class UserController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  fetchUser = async (req: any, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json("Not Authenticated");
      }

      const user = await this.userService.fetchUserById(req.user.user_id);
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  };

  deleteUser = async (req: any, res: Response) => {
    try {
      if (!req.user) {
        return res.status(401).json("Not Authenticated");
      }

      const deletedUser = await this.userService.deleteUserById(
        req.user.user_id
      );
      console.log(deletedUser);
      res.json("Your profile has been deleted!");
    } catch (err) {
      console.error(err.message);
      res.status(500).json("Server Error");
    }
  };
}
