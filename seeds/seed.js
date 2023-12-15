const sequelize = require('../config/connection');
const { Filament,
    Material,
    Printer,
    Settings,
    User } = require('../models');

const userData = require('./userData.json');
const printerData = require('./printerData.json');
const filamentData = require('./filamentData.json');
const materialData = require('./materialData.json');
const settingsData = require('./settingsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    const printers = await Printer.bulkCreate(printerData);
    const filaments = await Filament.bulkCreate(filamentData);
    const materials = await Material.bulkCreate(materialData);
    const settings = await Settings.bulkCreate(settingsData);
  
    // Assuming 'printerOwnedData' has a structure like the 'printersOwned.json' example provided earlier
  
    process.exit(0);
  };
  
  seedDatabase();