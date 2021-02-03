import { Router } from "express";
import { AuthController } from "../controllers/auth";
import { authorization } from "../middleware/authorization";

const router = Router();
const authController = new AuthController();

// route for registering a user
router.post("/register", authController.registerUser);

// route for logging a user in
router.post("/login", authController.loginUser);

// route for checking the authentication status of a user
router.get("/is-authenticated", authorization, authController.isAuthenticated);

// route for getting new tokens to persist authentication
router.get("/refresh-token", authController.refreshToken);

export { router };
