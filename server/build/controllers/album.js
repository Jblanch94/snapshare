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
exports.AlbumController = void 0;
var album_1 = require("../services/album");
var AlbumController = /** @class */ (function () {
    function AlbumController() {
        var _this = this;
        // function that creates a new album for a user
        this.createAlbum = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var title, user_id, album, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = req.body.title;
                        user_id = req.user.user_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.albumService.createAlbum(user_id, title)];
                    case 2:
                        album = _a.sent();
                        res.json(album.dataValues);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // function that edits the name of an album
        this.editAlbum = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var title, id, updates, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = req.body.title;
                        id = req.params.id;
                        if (!title) {
                            return [2 /*return*/, res.status(400).json('Missing title')];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.albumService.editAlbum(title, id)];
                    case 2:
                        updates = (_a.sent())[0];
                        if (updates < 1) {
                            throw { message: 'No updates were performed' };
                        }
                        res.json('Updated album successfully!');
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _a.sent();
                        console.error(err_2.message);
                        res.status(500).json(err_2.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        //TODO: ADD ERROR HANDLING FOR TRYING TO ALLOW TWO OF THE SAME POST IN THE SAME ALBUM
        // controller that inserts a post from the current user into the album
        this.insertPostIntoAlbum = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, albumId, postId, user_id, postInAlbum, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, albumId = _a.albumId, postId = _a.postId;
                        user_id = req.user.user_id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.albumService.insertPostIntoAlbum(albumId, postId, user_id)];
                    case 2:
                        postInAlbum = _b.sent();
                        res.json(postInAlbum.dataValues);
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _b.sent();
                        console.error(err_3.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // controller that deletes a post from a specified album
        this.deletePostFromAlbum = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, albumId, postId, deletedPost, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.params, albumId = _a.albumId, postId = _a.postId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.albumService.deletePostFromAlbum(albumId, postId)];
                    case 2:
                        deletedPost = _b.sent();
                        res.json({
                            message: 'Successfully removed post from album',
                            details: deletedPost,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _b.sent();
                        console.error(err_4.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // function that fetchs the posts in album, returns the key for the post id
        this.fetchPostsInAlbum = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, postsInAlbum, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.albumService.fetchPostsInAlbum(id)];
                    case 2:
                        postsInAlbum = _a.sent();
                        res.json(postsInAlbum);
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        console.error(err_5.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // function that deletes an album and it's contents
        this.deleteAlbum = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, deletedAlbum, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.albumService.deleteAlbum(id)];
                    case 2:
                        deletedAlbum = _a.sent();
                        console.log(deletedAlbum);
                        res.json({});
                        return [3 /*break*/, 4];
                    case 3:
                        err_6 = _a.sent();
                        console.error(err_6.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.albumService = new album_1.AlbumService();
    }
    return AlbumController;
}());
exports.AlbumController = AlbumController;
