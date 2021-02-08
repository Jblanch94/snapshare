"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var comment_1 = require("../controllers/comment");
var router = express_1.Router();
exports.router = router;
var commentController = new comment_1.CommentController();
// Route to create a new comment on a specific post
router.post('/post/:id', authorization_1.authorization, commentController.createComment);
// Route to retrieve all the comments for a specific post
router.get('/post/:id', commentController.fetchComments);
