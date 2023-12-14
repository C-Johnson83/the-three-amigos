
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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