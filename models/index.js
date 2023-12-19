const User = require('./User');
const Printer = require('./Printer');
const Material = require('./Material');
const Filament = require('./Filament');
const Settings = require('./Settings');

User.hasMany(Printer, { foreignKey: 'userId' });
Printer.belongsTo(User, { foreignKey: 'userId' });

Material.hasMany(Filament, { foreignKey: 'materialId' });
Filament.belongsTo(Material, { foreignKey: 'materialId' });

User.hasMany(Filament, { foreignKey: 'userId' });
Filament.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Settings, { foreignKey: 'userId' });
Settings.belongsTo(User, { foreignKey: 'userId' });

Printer.hasMany(Settings, { foreignKey: 'printerId' });
Settings.belongsTo(Printer, { 
    foreignKey: 'printerId', 
    // as: 'printer' 
});

Filament.hasMany(Settings, { foreignKey: 'filamentId' });
Settings.belongsTo(Filament, { foreignKey: 'filamentId', 
// as: 'filament' 
});

module.exports = {
    Filament,
    Material,
    Printer,
    Settings,
    User,
};