"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Favorite = db.define('Favorite', {
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: false,
    },
}, {
    updatedAt: false,
    underscored: true,
});
exports.Favorite = Favorite;
