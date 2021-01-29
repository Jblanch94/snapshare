"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var DatabaseService_1 = require("./services/DatabaseService");
var models_associations_1 = require("./utils/models.associations");
var app = express_1.default();
var PORT = process.env.PORT || 5000;
var db = DatabaseService_1.sequelize.getInstance;
var associations = new models_associations_1.ModelAssociations(db);
associations.setupRelations();
db.sync({ force: true });
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
