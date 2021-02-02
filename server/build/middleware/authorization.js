"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
var validToken_1 = require("../utils/validToken");
var authorization = function (req, res, next) {
    var _a;
    // get the token from the header
    var token = (_a = req["headers"].authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    // if no token then respond with not authenticated
    if (!token) {
        return res.status(403).json("Not Authorized");
    }
    // compare the token to see if it is valid
    try {
        var decoded = validToken_1.decodeToken(token);
        if (decoded.message) {
            throw decoded;
        }
        if (!decoded) {
            throw { message: "Not Authorized" };
        }
        req.user = decoded;
        next();
    }
    catch (err) {
        res.status(500).json(err.message);
    }
};
exports.authorization = authorization;
