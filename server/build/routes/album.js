"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var album_1 = require("../controllers/album");
var router = express_1.Router();
exports.router = router;
var albumController = new album_1.AlbumController();
// route to create a new album for a specific user
router.post('/', authorization_1.authorization, albumController.createAlbum);
// route to change the name of album
router.patch('/:id', authorization_1.authorization, albumController.editAlbum);
// route to delete an album
router.delete('/:id', authorization_1.authorization, albumController.deleteAlbum);
// route to insert a post into album
router.post('/:albumId/post/:postId', authorization_1.authorization, albumController.insertPostIntoAlbum);
// route to delete a post from an album
router.delete('/:albumId/post/:postId', authorization_1.authorization, albumController.deletePostFromAlbum);
// route to fetch all posts for a particular album
router.get('/:id', albumController.fetchPostsInAlbum);
