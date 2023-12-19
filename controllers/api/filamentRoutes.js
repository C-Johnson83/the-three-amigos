const router = require('express').Router();
const { Filament } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to render the "Add Filament" form
router.get('/', withAuth, (req, res) => {
  try {
    res.render('add-filament'); 
  } catch (err) {
    res.status(500).json( err.message + 'Internal server error' );
  }
});

// Route to handle the form submission and add a new printer
router.post('/', withAuth, async (req, res) => {
  try {
    const { materialId, manufacturer, color, diameter, } = req.body;

    // Create a new filament
    const newFilament = await Filament.create({
      materialId,
      manufacturer,
      color,
      diameter,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFilament);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
