"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Associations = void 0;
var models = __importStar(require("./"));
var Associations = /** @class */ (function () {
    function Associations(db) {
        this.db = db;
    }
    Associations.prototype.setupRelations = function () {
        // set up relation between user and post
        models.User.hasMany(models.Post);
        models.Post.belongsTo(models.User, { foreignKey: { name: 'user_id' } });
        // set up relation between tags and posts
        models.Tag.belongsToMany(models.Post, {
            through: models.Post_Tag,
            foreignKey: 'tag_id',
        });
        models.Post.belongsToMany(models.Tag, {
            through: models.Post_Tag,
            foreignKey: 'post_id',
        });
        // set up relation between comments, post and user
        models.User.hasMany(models.Comment);
        models.Post.hasMany(models.Comment);
        models.Comment.belongsTo(models.User);
        models.Comment.belongsTo(models.Post);
        // set up relation between favorite with post and user
        models.User.belongsToMany(models.Post, {
            through: models.Favorite,
            foreignKey: 'post_id',
        });
        models.Post.belongsToMany(models.User, {
            through: models.Favorite,
            foreignKey: 'user_id',
        });
        // set up relation between user and album
        models.User.hasMany(models.Album);
        models.Album.belongsTo(models.User);
        // set up relation between post and album
        models.Post.belongsToMany(models.Album, {
            through: models.Album_Post,
            foreignKey: 'post_id',
        });
        models.Album.belongsToMany(models.Post, {
            through: models.Album_Post,
            foreignKey: 'album_id',
        });
        // set up relation between upvotes with post and user
        models.User.belongsToMany(models.Post, {
            through: models.Upvote,
            foreignKey: 'user_id',
        });
        models.Post.belongsToMany(models.User, {
            through: models.Upvote,
            foreignKey: 'post_id',
        });
    };
    return Associations;
}());
exports.Associations = Associations;
