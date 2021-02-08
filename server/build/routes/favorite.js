"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var favorite_1 = require("../controllers/favorite");
var router = express_1.Router();
exports.router = router;
var favoriteController = new favorite_1.FavoriteController();
// retrieve all of the posts the user favorited
router.get('/', authorization_1.authorization, favoriteController.fetchFavoritedPosts);
// add a post to the favorited collection
router.post('/post/:id', authorization_1.authorization, favoriteController.createFavoritedPost);
// remove a post from the user's favorited collection
router.delete('/post/:id', authorization_1.authorization, favoriteController.deleteFavoritedPost);
