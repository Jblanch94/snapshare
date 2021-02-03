"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var user_1 = require("../controllers/user");
var router = express_1.Router();
exports.router = router;
var userController = new user_1.UserController();
// route for getting the current user profile
router.get("/", authorization_1.authorization, userController.fetchUser);
// route for deleting a current user
router.delete("/", authorization_1.authorization, userController.deleteUser);
// route for updating a user profile
router.patch("/", authorization_1.authorization);
// route for getting all of the posts created by the current user
router.get("/posts", authorization_1.authorization);
