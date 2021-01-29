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
exports.ModelAssociations = void 0;
var models = __importStar(require("../models"));
var ModelAssociations = /** @class */ (function () {
    function ModelAssociations(db) {
        this.db = db;
    }
    ModelAssociations.prototype.setupRelations = function () {
        // Create relation between User and Post Model
        models.User.hasMany(models.Post);
        models.Post.belongsTo(models.User, { foreignKey: 'user_id' });
        // Create relation between Post and Tag Model
        models.Post.belongsToMany(models.Tag, {
            through: models.Post_Tag,
            foreignKey: 'post_id',
        });
        models.Tag.belongsToMany(models.Post, {
            through: models.Post_Tag,
            foreignKey: 'tag_id',
        });
        // Create relation between favorites, user and post models
        models.User.belongsToMany(models.Post, {
            through: models.Favorite,
            foreignKey: 'user_id',
        });
        models.Post.belongsToMany(models.User, {
            through: models.Favorite,
            foreignKey: 'post_id',
        });
        // Create relation between comments, user and post models
        models.User.hasMany(models.Comment, { foreignKey: 'user_id' });
        models.Comment.belongsTo(models.User);
        models.Post.hasMany(models.Comment, { foreignKey: 'post_id' });
        models.Comment.belongsTo(models.Post);
        // Create relation between user and album
        models.User.hasMany(models.Album, { foreignKey: 'user_id' });
        models.Album.belongsTo(models.User);
        // Create relation between post and album
        models.Album.belongsToMany(models.Post, {
            through: models.Album_Post,
            foreignKey: 'album_id',
        });
        models.Post.belongsToMany(models.Album, {
            through: models.Album_Post,
            foreignKey: 'post_id',
        });
        // Create relation between user, post and upvotes
        models.User.belongsToMany(models.Post, {
            through: models.Upvote,
            foreignKey: 'user_id',
        });
        models.Post.belongsToMany(models.User, {
            through: models.Upvote,
            foreignKey: 'post_id',
        });
    };
    return ModelAssociations;
}());
exports.ModelAssociations = ModelAssociations;
