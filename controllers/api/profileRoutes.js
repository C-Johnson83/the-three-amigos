const router = require('express').Router();
const { Printer, Filament, Settings } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/add-printer', withAuth, async (req, res) => {
  try {
    const newPrinter = await Printer.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPrinter);
  } catch (err) {
    res.status(400).json("Profile route line 14 \n"+ err.message);
  }
});

router.post('/add-filament', withAuth, async (req, res) => {
  try {
    const { printerId, name, manufacturer, color, diameter, settings } = req.body;

    const newFilament = await Filament.create({
      printerId,
      name,
      manufacturer,
      color,
      diameter,
      user_id: req.session.user_id,
    });

    if (settings && settings.length > 0) {
      await newFilament.setSettings(settings);

      const associatedPrinters = await Printer.findAll({
        where: { user_id: req.session.user_id },
      });

      for (const printer of associatedPrinters) {
        await printer.addFilament(newFilament);
        await printer.setSettings(settings);
      }
    }

    res.status(200).json(newFilament);
  } catch (err) {
    res.status(400).json("Profile route line 46 \n"+ err.message);
  }
});

module.exports = router;
