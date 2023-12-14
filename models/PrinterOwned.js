const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Printer = require('./Printer');
const User = require('./User');

class PrinterOwned extends Model {}

PrinterOwned.init(
  {
    printerId: {
      type: DataTypes.INTEGER,
      references: {
        model: Printer, 
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.STRING,
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
    modelName: 'printerowned',
  }
);

module.exports = PrinterOwned;
