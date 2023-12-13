const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PrinterOwned extends Model { }

PrinterOwned.init(
    {
        PrinterID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Project',
                key: 'id',
            },
        },
        UserID: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id',
            }
    },
},
{
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'printerOwned',
    }

);

module.exports = printerOwned;