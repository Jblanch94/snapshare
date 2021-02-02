import { Router } from "express";
import { AuthController } from "../controllers/auth";

const router = Router();
const authController = new AuthController();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

//TODO: IMPLEMENT THESE ROUTES
router.get("/is-authenticated");

router.get("/refresh-token");

export { router };
