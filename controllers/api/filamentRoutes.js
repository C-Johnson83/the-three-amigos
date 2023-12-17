const router = require('express').Router();
const { Filament, Settings } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const { name, manufacturer, color, diameter, settings } = req.body;

    const newFilament = await Filament.create({
      name,
      manufacturer,
      color,
      diameter,
      user_id: req.session.user_id,
    });

    if (settings && settings.length > 0) {
      await newFilament.setSettings(settings);
    }

    res.status(200).json(newFilament);
  } catch (err) {
    res.status(400).json("Filament route line 23 \n"+ err.message);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const filaments = await Filament.findAll({
      where: { user_id: req.session.user_id },
      include: Settings,
    });

    res.status(200).json(filaments);
  } catch (err) {
    res.status(500).json("Filament route line 36 \n"+ err.message);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedFilament = await Filament.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (updatedFilament[0] === 0) {
      res.status(404).json({ message: 'Filament not found or not authorized' });
      return;
    }

    res.status(200).json({ message: 'Filament updated successfully' });
  } catch (err) {
    res.status(500).json("Filament route line 56 \n"+ err.message);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedFilament = await Filament.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deletedFilament) {
      res.status(404).json({ message: 'Filament not found or not authorized' });
      return;
    }

    res.status(200).json({ message: 'Filament deleted successfully' });
  } catch (err) {
    res.status(500).json("Filament route line 76 \n"+ err.message);
  }
});

module.exports = router;
