const sequelize = require('../config/connection');
const { Material,
    Filament,
    Printer,
    Settings,
    User } = require('../models');

const userData = require('./userData.json');
const printerData = require('./printerData.json');
const materialData = require('./materialData.json');
const filamentData = require('./filamentData.json');
const settingsData = require('./settingsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    const printers = await Printer.bulkCreate(printerData);
    const materials = await Material.bulkCreate(materialData);
    const filaments = await Filament.bulkCreate(filamentData);
    const settings = await Settings.bulkCreate(settingsData);
  
    // Assuming 'printerOwnedData' has a structure like the 'printersOwned.json' example provided earlier
  
    process.exit(0);
  };
  
  seedDatabase();