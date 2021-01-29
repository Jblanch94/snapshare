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
    title: {
        type: sequelize_1.DataTypes.STRING(240),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide a title for the post',
            },
        },
    },
    description: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide a description for the post',
            },
        },
    },
    img: {
        type: sequelize_1.DataTypes.STRING(500),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please provide an image for the post',
            },
        },
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
    underscored: true,
});
exports.Post = Post;
