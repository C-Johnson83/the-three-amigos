const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Filament extends Model { }

Filament.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manufacturer: {
            type: DataTypes.STRING,
        },
        color: {
            type: DataTypes.STRING,
        },
        diameter: {
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