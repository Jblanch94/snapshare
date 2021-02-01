import { Router } from 'express';
import { AuthController } from '../controllers/auth';

const router = Router();
const authController = new AuthController();

router.post('/register', authController.registerUser);

export { router };
