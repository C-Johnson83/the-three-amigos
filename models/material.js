const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Material extends Model { }

Material.init(
    {
        MaterialID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        materialType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'material',
    }
);

module.exports = Material;