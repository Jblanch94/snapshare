"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var authorization_1 = require("../middleware/authorization");
var router = express_1.Router();
exports.router = router;
var authController = new auth_1.AuthController();
// route for registering a user
router.post("/register", authController.registerUser);
// route for logging a user in
router.post("/login", authController.loginUser);
// route for checking the authentication status of a user
router.get("/is-authenticated", authorization_1.authorization, authController.isAuthenticated);
// route for getting new tokens to persist authentication
router.get("/refresh-token", authController.refreshToken);
