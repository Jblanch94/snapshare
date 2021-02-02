import { Router } from "express";
import { AuthController } from "../controllers/auth";
import { authorization } from "../middleware/authorization";

const router = Router();
const authController = new AuthController();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.get("/is-authenticated", authorization, authController.isAuthenticated);

router.get("/refresh-token", authController.refreshToken);

export { router };
