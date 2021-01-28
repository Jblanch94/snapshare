"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Post = db.define('Post', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(240),
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
        references: {
            model: 'Users',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
}, {
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    underscored: true,
});
exports.Post = Post;
