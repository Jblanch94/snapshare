"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var User = db.define('User', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.NOW,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING(500),
        defaultValue: '',
    },
}, {
    updatedAt: false,
    underscored: true,
});
exports.User = User;
