"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album_Post = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var Post_1 = require("./Post");
var Album_1 = require("./Album");
var db = DatabaseService_1.sequelize.getInstance;
var Album_Post = db.define('AlbumsPosts', {
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Post_1.Post,
            key: 'id',
        },
        primaryKey: false,
        onDelete: 'CASCADE',
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW,
    },
    album_id: {
        primaryKey: false,
        type: sequelize_1.DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
            model: Album_1.Album,
            key: 'id',
        },
    },
}, {
    underscored: true,
    updatedAt: false,
});
exports.Album_Post = Album_Post;
