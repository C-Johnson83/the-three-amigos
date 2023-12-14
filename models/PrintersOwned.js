const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Printer = require('./Printer');
const User = require('./User');

class PrintersOwned extends Model {}

PrintersOwned.init(
  {
    printerId: {
      type: DataTypes.INTEGER,
      references: {
        model: Printer, 
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, 
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'printersOwned',
  }
);

module.exports = PrintersOwned;
