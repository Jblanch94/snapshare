"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Comment = db.define('Comment', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW,
    },
    contents: {
        type: sequelize_1.DataTypes.STRING(800),
        allowNull: false,
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        },
        primaryKey: false,
        onDelete: 'CASCADE',
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        },
        primaryKey: false,
        onDelete: 'CASCADE',
    },
}, {
    underscored: true,
});
exports.Comment = Comment;
