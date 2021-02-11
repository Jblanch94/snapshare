"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var post_1 = require("../controllers/post");
var multer_1 = __importDefault(require("multer"));
var router = express_1.Router();
exports.router = router;
var upload = multer_1.default({
    dest: 'uploads/',
});
var postController = new post_1.PostController();
try {
    // Route to create a new post by a user
    router.post('/', authorization_1.authorization, upload.single('img'), postController.createPost);
    // Route to update the title or description of a post
    router.patch('/:id', authorization_1.authorization, postController.updatePost);
    // Route to delete a post by the author
    router.delete('/:id', authorization_1.authorization, postController.deletePost);
    // Route to upvote a post
    router.post('/:id/upvote', authorization_1.authorization, postController.upvotePost);
    // Route to fetch a post by id
    router.get('/:id', postController.fetchPostById);
    // Route to fetch posts, includes pagination
    router.get('/', postController.fetchPosts);
}
catch (error) {
    console.error(error.message);
}
