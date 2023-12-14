const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Printer = require('./printer');
const User = require('./user');

class PrinterOwned extends Model {}

PrinterOwned.init(
  {
    PrinterID: {
      type: DataTypes.INTEGER,
      references: {
        model: Printer, 
        key: 'PrinterID',
      },
    },
    UserID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User, 
        key: 'UserID',
      },
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

module.exports = PrinterOwned;
