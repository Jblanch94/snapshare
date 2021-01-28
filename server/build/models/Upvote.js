"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upvote = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Upvote = db.define('Upvote', {
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
        onDelete: 'CASCADE',
        references: {
            model: 'Post',
            key: 'id',
        },
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
        onDelete: 'CASCADE',
        references: {
            model: 'User',
            key: 'id',
        },
    },
}, {
    createdAt: false,
    updatedAt: false,
    underscored: true,
});
exports.Upvote = Upvote;
