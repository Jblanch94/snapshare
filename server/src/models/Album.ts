import {sequelize} from '../services/DatabaseService';
import {DataTypes, NOW} from 'sequelize';

const db = sequelize.getInstance;

const Album = db.define(
    'Album',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: NOW,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a title for your album',
                },
                max: 50,
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: false,
            references: {
                model: 'User',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
    },
    {
        updatedAt: false,
        underscored: true,
        createdAt: false
    }
);

export {Album};
