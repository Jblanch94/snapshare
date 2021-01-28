"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album_Post = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Album_Post = db.define('Albums_Posts', {
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: false,
    },
    album_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
        onDelete: 'CASCADE',
        references: {
            model: 'Album',
            key: 'id',
        },
    },
}, {
    underscored: true,
    updatedAt: false,
    createdAt: 'created_at',
});
exports.Album_Post = Album_Post;