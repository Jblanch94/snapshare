"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var DatabaseService_1 = require("./services/DatabaseService");
var models_associations_1 = require("./utils/models.associations");
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
    }
    App.prototype.start = function () {
        var PORT = process.env.PORT || 5000;
        var db = DatabaseService_1.sequelize.getInstance;
        // Create models and relationships
        new models_associations_1.ModelAssociations(db).setupRelations();
        db.sync({ force: true });
        // load in middlewares
        // load in routes
        // start server
        this.app.listen(PORT, function () {
            console.log("Listening on port " + PORT);
        });
    };
    return App;
}());
exports.App = App;
