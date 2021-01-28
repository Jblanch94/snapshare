"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Tag = db.define('Tag', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.Tag = Tag;
