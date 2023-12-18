const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Material = require('./Material')
const User = require('./User')

class Filament extends Model { }

Filament.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        materialId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Material,
                key: 'id'
            }
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
        },
        diameter: {
            type: DataTypes.FLOAT,
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
        modelName: 'filament',
    }
);

module.exports = Filament;