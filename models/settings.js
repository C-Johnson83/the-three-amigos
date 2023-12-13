
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Settings extends Model { }


Settings.init(
    {
        SettingsID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        PrintTemperature: {
            type: DataTypes.INTEGER,
        },
        InitialLayerTemperature: {
            type: DataTypes.INTEGER,
        },
        BuildPlateTemperature: {
            type: DataTypes.INTEGER,
        },
        RetractionDistance: {
            type: DataTypes.INTEGER,
        },
        RetractionSpeed: {
            type: DataTypes.INTEGER,
        },
        MaxRetractionCount: {
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

module.exports = settings;