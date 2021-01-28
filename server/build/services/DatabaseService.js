"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
var db_1 = require("../db");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
    }
    Object.defineProperty(DatabaseService, "getInstance", {
        get: function () {
            if (!this.instance) {
                try {
                    this.instance = db_1.pool;
                }
                catch (err) {
                    console.error(err.message);
                }
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
