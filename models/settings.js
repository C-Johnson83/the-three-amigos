
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Filament = require('./Filament');
const Printer = require('./Printer');
const User = require('./User');

class Settings extends Model { }


Settings.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        printTemperature: {
            type: DataTypes.INTEGER,
        },
        initialLayerTemperature: {
            type: DataTypes.INTEGER,
        },
        buildPlateTemperature: {
            type: DataTypes.INTEGER,
        },
        retractionDistance: {
            type: DataTypes.INTEGER,
        },
        retractionSpeed: {
            type: DataTypes.INTEGER,
        },
        maxRetractionCount: {
            type: DataTypes.INTEGER,
        },
        filamentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Filament,
                key: 'id'
            }
        },
        printerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Printer,
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'settings',
    }
);

module.exports = Settings;