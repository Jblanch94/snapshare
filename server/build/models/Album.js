"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Album = db.define('Album', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: false,
        references: {
            model: 'User',
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
}, {
    updatedAt: false,
    createdAt: 'created_at',
    underscored: true,
});
exports.Album = Album;
