import { Router } from "express";
import { authorization } from "../middleware/authorization";
import { UserController } from "../controllers/user";

const router = Router();
const userController = new UserController();

// route for getting the current user profile
router.get("/", authorization, userController.fetchUser);

// route for deleting a current user
router.delete("/", authorization, userController.deleteUser);

// route for updating a user profile
router.patch("/", authorization);

// route for getting all of the posts created by the current user
router.get("/posts", authorization);

export { router };
