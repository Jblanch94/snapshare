"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadRoutes = void 0;
var auth_1 = require("../routes/auth");
var user_1 = require("../routes/user");
var post_1 = require("../routes/post");
var comment_1 = require("../routes/comment");
var favorite_1 = require("../routes/favorite");
var album_1 = require("../routes/album");
var loadRoutes = function (app) {
    var url = '/snapshare/api';
    app.use(url + "/auth", auth_1.router);
    app.use(url + "/user", user_1.router);
    app.use(url + "/post", post_1.router);
    app.use(url + "/comment", comment_1.router);
    app.use(url + "/favorite", favorite_1.router);
    app.use(url + "/album", album_1.router);
};
exports.loadRoutes = loadRoutes;
