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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
var cloudinary_1 = __importDefault(require("cloudinary"));
var keys_1 = require("../config/keys");
var post_1 = require("../services/post");
var util_1 = require("util");
var fs_1 = __importDefault(require("fs"));
// TODO: extract into own file
// function to remove file
var unlinkAsync = util_1.promisify(fs_1.default.unlink);
var PostController = /** @class */ (function () {
    function PostController() {
        var _this = this;
        // function that stores image and creates a new post, tags and associate tags with the model
        this.createPost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, title, description, tags, user_id, url, post, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, description = _a.description, tags = _a.tags;
                        user_id = req.user.user_id;
                        if (!title || !description || tags.length === 0) {
                            return [2 /*return*/, res.json('Missing Post Information!')];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, cloudinary_1.default.v2.uploader.upload(req.file.path, {
                                public_id: "Snapshare/Dev/posts/" + req.file.originalname,
                                overwrite: true,
                            })];
                    case 2:
                        url = (_b.sent()).url;
                        // remove temporary after upload is complete
                        return [4 /*yield*/, unlinkAsync(req.file.path)];
                    case 3:
                        // remove temporary after upload is complete
                        _b.sent();
                        return [4 /*yield*/, this.postService.createPost({
                                title: title,
                                description: description,
                                img: url,
                                tags: tags,
                                user_id: user_id,
                            })];
                    case 4:
                        post = _b.sent();
                        res.status(201).json(post);
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _b.sent();
                        console.error(err_1.message);
                        res.status(500).json(err_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        // function that deletes a post by the id provided if the user created the original post
        this.deletePost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user_id, post, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        user_id = req.user.user_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.postService.fetchPostById(id)];
                    case 2:
                        post = _a.sent();
                        // if author id and current user id don't match then respond can't delete post it is not your own
                        if (post.getDataValue('user_id') !== user_id) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json("Can't delete post, this is not your post!")];
                        }
                        // call function to delete post
                        return [4 /*yield*/, this.postService.deletePostById(id)];
                    case 3:
                        // call function to delete post
                        _a.sent();
                        res.json('Successfully deleted post!');
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        console.error(err_2.message);
                        res.status(500).json(err_2.message);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.updatePost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user_id, _a, title, description, post, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        user_id = req.user.user_id;
                        _a = req.body, title = _a.title, description = _a.description;
                        if (title === undefined && description === undefined) {
                            return [2 /*return*/, res.json('You must provide at least one update for the title or description!')];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.postService.fetchPostById(id)];
                    case 2:
                        post = _b.sent();
                        // if author id and current user id don't match then respond can't update post it is not your own
                        if (post.getDataValue('user_id') !== user_id) {
                            return [2 /*return*/, res
                                    .status(400)
                                    .json("Can't delete post, this is not your post!")];
                        }
                        return [4 /*yield*/, this.postService.updatePost(id, {
                                title: title,
                                description: description,
                            })];
                    case 3:
                        _b.sent();
                        res.json('Post was successfully updated');
                        return [3 /*break*/, 5];
                    case 4:
                        err_3 = _b.sent();
                        console.error(err_3.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.upvotePost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, user_id, upvote, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        user_id = req.user.user_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.postService.upvotePost(id, user_id)];
                    case 2:
                        upvote = _a.sent();
                        res.status(201).json(upvote);
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        console.error(err_4.message);
                        res.status(500).json('Server Error');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.config = cloudinary_1.default.v2.config({
            cloud_name: keys_1.keys.cloudinary_cloud_name,
            api_key: keys_1.keys.cloudinary_api_key,
            api_secret: keys_1.keys.cloudinary_api_secret,
        });
        this.postService = new post_1.PostService();
    }
    return PostController;
}());
exports.PostController = PostController;
