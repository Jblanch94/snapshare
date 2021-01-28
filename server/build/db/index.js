"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
var keys_1 = require("../config/keys");
var sequelize;
exports.sequelize = sequelize;
if (process.env.NODE_ENV === 'production') {
}
else {
    exports.sequelize = sequelize = new sequelize_1.Sequelize(keys_1.keys.database, keys_1.keys.user, keys_1.keys.password, {
        host: keys_1.keys.host,
        dialect: 'postgres',
    });
}
