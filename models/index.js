const User = require('./User');
const Printer = require('./Printer');
const Material = require('./Material');
const Filament = require('./Filament');
const Settings = require('./Settings');

User.hasMany(Printer, { foreignKey: 'userId' });
Printer.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    Filament,
    Material,
    Printer,
    Settings,
    User,
};