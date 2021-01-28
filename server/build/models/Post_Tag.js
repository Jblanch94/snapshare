"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post_Tag = void 0;
var DatabaseService_1 = require("../services/DatabaseService");
var sequelize_1 = require("sequelize");
var db = DatabaseService_1.sequelize.getInstance;
var Post_Tag = db.define('Posts_Tags', {
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Post',
            key: 'id',
        },
        primaryKey: false,
    },
    tag_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'Tag',
            key: 'id',
        },
        primaryKey: false,
    },
}, {
    updatedAt: false,
    createdAt: false,
    underscored: true,
});
exports.Post_Tag = Post_Tag;
