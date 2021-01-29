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
        validate: {
            notNull: {
                msg: 'You need to provide your first name',
            },
        },
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'You need to provide your last name',
            },
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'You need to provide a valid email',
            },
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false,
        validate: {
            is: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{6}$',
        },
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
User.addHook('beforeCreate', function (user, options) {
    // logic to hash the password
});
