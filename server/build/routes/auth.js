"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var auth_1 = require("../controllers/auth");
var router = express_1.Router();
exports.router = router;
var authController = new auth_1.AuthController();
router.post('/register', authController.registerUser);
