const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Filament extends Model { }

Filament.init(
    {
        FilamentID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        FilamentName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Manufacturer: {
            type: DataTypes.STRING,
        },
        Color: {
            type: DataTypes.STRING,
        },
        Diameter: {
            type: DataTypes.FLOAT,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'filament',
    }
);

module.exports = Filament;