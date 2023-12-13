const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Printer extends Model { }

Printer.init(
    {
        PrinterID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        PrinterName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Manufacturer: {
            type: DataTypes.STRING,
        },
        Model: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'printer',
    }
);

module.exports = Printer;