const router = require('express').Router();
const { Settings, Printer, Filament } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
   
    const allSettings = await Settings.findAll({
      include: [{
        model: Printer,
        as: 'printer',
        include: [{
          model: Filament,
          as: 'filament',
        }]
      }]
    });

    const settings = allSettings.map((setting) => setting.get({ setting: true }));

    res.render('settings', { settings });
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;