"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumService = void 0;
var Album_1 = require("../models/Album");
var Post_1 = require("../models/Post");
var Album_Post_1 = require("../models/Album_Post");
var AlbumService = /** @class */ (function () {
    function AlbumService() {
    }
    // function that creates a new Album instance with the current user and provided title
    AlbumService.prototype.createAlbum = function (user_id, title) {
        return __awaiter(this, void 0, void 0, function () {
            var album, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Album_1.Album.create({
                                title: title,
                                user_id: user_id,
                            })];
                    case 1:
                        album = _a.sent();
                        return [2 /*return*/, album];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, err_1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // function that edits an album's name with a corresponding id
    AlbumService.prototype.editAlbum = function (title, id) {
        return __awaiter(this, void 0, void 0, function () {
            var album, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Album_1.Album.update({ title: title }, {
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        album = _a.sent();
                        return [2 /*return*/, album];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, err_2];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // function that inserts a post into the user's corresponding album
    AlbumService.prototype.insertPostIntoAlbum = function (album_id, post_id, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var post, album_post, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, Post_1.Post.findAll({
                                where: {
                                    id: post_id,
                                    user_id: user_id,
                                },
                            })];
                    case 1:
                        post = _a.sent();
                        if (!post.length) {
                            throw {
                                message: 'This post either does not exist or was not created by you!',
                            };
                        }
                        return [4 /*yield*/, Album_Post_1.Album_Post.create({
                                post_id: post_id,
                                album_id: album_id,
                            })];
                    case 2:
                        album_post = _a.sent();
                        return [2 /*return*/, album_post];
                    case 3:
                        err_3 = _a.sent();
                        return [2 /*return*/, err_3];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // function that deletes a post from a user's album
    AlbumService.prototype.deletePostFromAlbum = function (album_id, post_id) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedPost, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Album_Post_1.Album_Post.destroy({
                                where: {
                                    post_id: post_id,
                                    album_id: album_id,
                                },
                            })];
                    case 1:
                        deletedPost = _a.sent();
                        return [2 /*return*/, deletedPost];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, err_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // function that fetchs all the posts for a given album
    AlbumService.prototype.fetchPostsInAlbum = function (album_id) {
        return __awaiter(this, void 0, void 0, function () {
            var posts, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Album_Post_1.Album_Post.findAll({
                                where: {
                                    album_id: album_id,
                                },
                            })];
                    case 1:
                        posts = _a.sent();
                        return [2 /*return*/, posts];
                    case 2:
                        err_5 = _a.sent();
                        return [2 /*return*/, err_5];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AlbumService.prototype.deleteAlbum = function (album_id) {
        return __awaiter(this, void 0, void 0, function () {
            var deletedAlbum, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Album_1.Album.destroy({
                                where: {
                                    id: album_id,
                                },
                            })];
                    case 1:
                        deletedAlbum = _a.sent();
                        return [2 /*return*/, deletedAlbum];
                    case 2:
                        err_6 = _a.sent();
                        return [2 /*return*/, err_6];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return AlbumService;
}());
exports.AlbumService = AlbumService;
