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
exports.PostService = void 0;
var db_1 = require("../db");
var Post_1 = require("../models/Post");
var Tag_1 = require("../models/Tag");
var Post_Tag_1 = require("../models/Post_Tag");
var Upvote_1 = require("../models/Upvote");
var sequelize_1 = require("sequelize");
var PostService = /** @class */ (function () {
    function PostService() {
    }
    PostService.prototype.createPost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var trx, post, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, db_1.sequelize.transaction()];
                    case 1:
                        trx = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 8]);
                        return [4 /*yield*/, Post_1.Post.create({
                                title: data.title,
                                description: data.description,
                                img: data.img,
                                user_id: data.user_id,
                            })];
                    case 3:
                        post = _a.sent();
                        return [4 /*yield*/, this.createOrFindTagsAndInsertIntoPostTags(data.tags, post.getDataValue('id'))];
                    case 4:
                        _a.sent();
                        // commit changes to database after everything passed without error
                        return [4 /*yield*/, trx.commit()];
                    case 5:
                        // commit changes to database after everything passed without error
                        _a.sent();
                        return [2 /*return*/, post];
                    case 6:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [4 /*yield*/, trx.rollback()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/, err_1];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.createOrFindTagsAndInsertIntoPostTags = function (tags, post_id) {
        return __awaiter(this, void 0, void 0, function () {
            var i, currentTag, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tags.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, Tag_1.Tag.findOrCreate({
                                where: {
                                    title: tags[i],
                                },
                            })];
                    case 2:
                        currentTag = (_a.sent())[0];
                        // store tag id and post id in the junction model for post_tag
                        return [4 /*yield*/, Post_Tag_1.Post_Tag.create({
                                post_id: post_id,
                                tag_id: currentTag.getDataValue('id'),
                            })];
                    case 3:
                        // store tag id and post id in the junction model for post_tag
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 1];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        console.error(err_2.message);
                        return [2 /*return*/, err_2];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.fetchPostById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var post, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Post_1.Post.findOne({
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        post = _a.sent();
                        return [2 /*return*/, post];
                    case 2:
                        err_3 = _a.sent();
                        console.error(err_3.message);
                        return [2 /*return*/, err_3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.deletePostById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Post_1.Post.destroy({
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        console.error(err_4.message);
                        return [2 /*return*/, err_4];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostService.prototype.updatePost = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var post, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Post_1.Post.update({ title: data === null || data === void 0 ? void 0 : data.title, description: data === null || data === void 0 ? void 0 : data.description }, {
                                where: {
                                    id: id,
                                },
                            })];
                    case 1:
                        post = _a.sent();
                        return [2 /*return*/, post];
                    case 2:
                        err_5 = _a.sent();
                        console.error(err_5.message);
                        return [2 /*return*/, err_5];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // function that will create a new instance of the upvote model
    PostService.prototype.upvotePost = function (post_id, user_id) {
        return __awaiter(this, void 0, void 0, function () {
            var upvote, err_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Upvote_1.Upvote.create({
                                post_id: post_id,
                                user_id: user_id,
                            })];
                    case 1:
                        upvote = _a.sent();
                        return [2 /*return*/, upvote];
                    case 2:
                        err_6 = _a.sent();
                        return [2 /*return*/, err_6];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // function that will fetch posts and do some pagination
    PostService.prototype.fetchPosts = function (limit, page, term) {
        return __awaiter(this, void 0, void 0, function () {
            var offset, inputParameters, queryWithTerm, queryWithoutTerm, query, posts, err_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        offset = page * limit;
                        inputParameters = { limit: limit, offset: offset, term: "%" + term + "%" };
                        queryWithTerm = "SELECT DISTINCT p.* FROM posts p\n      JOIN posts_tags pt ON pt.post_id = p.id\n      JOIN tags t ON pt.tag_id = t.id\n      WHERE t.title LIKE :term\n      OR p.title LIKE :term\n      OR p.description LIKE :term\n      LIMIT :limit\n      OFFSET :offset";
                        queryWithoutTerm = "SELECT DISTINCT * FROM posts\n      ORDER BY created_at\n      LIMIT :limit\n      OFFSET :offset\n      ";
                        query = term ? queryWithTerm : queryWithoutTerm;
                        return [4 /*yield*/, db_1.sequelize.query(query, {
                                type: sequelize_1.QueryTypes.SELECT,
                                replacements: inputParameters,
                            })];
                    case 1:
                        posts = _a.sent();
                        return [2 /*return*/, posts];
                    case 2:
                        err_7 = _a.sent();
                        return [2 /*return*/, err_7];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return PostService;
}());
exports.PostService = PostService;
