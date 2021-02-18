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
exports.FavoriteController = void 0;
var favorite_1 = require("../services/favorite");
var apiError_1 = require("../error/apiError");
var FavoriteController = /** @class */ (function () {
    function FavoriteController() {
        var _this = this;
        // function that retrieves all of the user's favorited posts
        this.fetchFavoritedPosts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user_id, favoritedPosts, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user_id = req.user.user_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.favoriteService.fetchFavoritedPosts(user_id)];
                    case 2:
                        favoritedPosts = _a.sent();
                        res.json(favoritedPosts);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        next(apiError_1.ApiError.badRequest(err_1.message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // function that adds a post to a user's favorited collection
        this.createFavoritedPost = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user_id, id, favoritedPost, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user_id = req.user.user_id;
                        id = req.params.id;
                        return [4 /*yield*/, this.favoriteService.createFavoritedPost(user_id, id)];
                    case 1:
                        favoritedPost = _a.sent();
                        if (favoritedPost.errors) {
                            return [2 /*return*/, next(apiError_1.ApiError.badRequest('You have already favorited this post!'))];
                        }
                        res.json(favoritedPost);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        next(apiError_1.ApiError.badRequest(err_2.message));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        // deleted a favorited post for a specific user
        this.deleteFavoritedPost = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, user_id, numFavoritedPostsDeleted, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        user_id = req.user.user_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.favoriteService.deleteFavoritedPost(user_id, id)];
                    case 2:
                        numFavoritedPostsDeleted = _a.sent();
                        if (numFavoritedPostsDeleted < 1) {
                            return [2 /*return*/, next(apiError_1.ApiError.notFound('Post you want to unfavorite does not exist!'))];
                        }
                        res.json('Removed post from favorites');
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        next(apiError_1.ApiError.badRequest(err_3.message));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.favoriteService = new favorite_1.FavoriteService();
    }
    return FavoriteController;
}());
exports.FavoriteController = FavoriteController;
