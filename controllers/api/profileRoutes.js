const router = require('express').Router();
const { Printer, Filament, Settings } = require('../../models');
const withAuth = require('../../utils/auth');

// Add a printer to the user's profile
router.post('/add-printer', withAuth, async (req, res) => {
  try {
    const newPrinter = await Printer.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPrinter);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Add a filament to the user's profile and associate with printer settings
router.post('/add-filament', withAuth, async (req, res) => {
  try {
    const { printerId, name, manufacturer, color, diameter, settings } = req.body;

    // Create filament
    const newFilament = await Filament.create({
      name,
      manufacturer,
      color,
      diameter,
      user_id: req.session.user_id,
    });

    // Associate filament with printer settings
    if (settings && settings.length > 0) {
      await newFilament.setSettings(settings);
    }

    res.status(200).json(newFilament);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
