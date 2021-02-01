"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = void 0;
var devKeys_1 = require("./devKeys");
var keys;
exports.keys = keys;
if (process.env.NODE_ENV === 'production') {
    exports.keys = keys = devKeys_1.devKeys;
}
else {
    exports.keys = keys = devKeys_1.devKeys;
}
