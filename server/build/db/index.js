"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
var keys_1 = require("../config/keys");
var pool;
exports.pool = pool;
if (process.env.NODE_ENV === 'production') {
}
else {
    exports.pool = pool = new pg_1.Pool({
        user: keys_1.keys.user,
        host: keys_1.keys.host,
        database: keys_1.keys.database,
        password: keys_1.keys.password,
        port: keys_1.keys.port,
    });
}
