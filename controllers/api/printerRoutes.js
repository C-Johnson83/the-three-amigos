const router = require('express').Router();
const { Printer } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new printer for the logged-in user
router.post('/', withAuth, async (req, res) => {
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

// Get all printers for the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const printers = await Printer.findAll({
      where: { user_id: req.session.user_id },
    });

    res.status(200).json(printers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a printer for the logged-in user
router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedPrinter = await Printer.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (updatedPrinter[0] === 0) {
      res.status(404).json({ message: 'Printer not found or not authorized' });
      return;
    }

    res.status(200).json({ message: 'Printer updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a printer for the logged-in user
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedPrinter = await Printer.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!deletedPrinter) {
      res.status(404).json({ message: 'Printer not found or not authorized' });
      return;
    }

    res.status(200).json({ message: 'Printer deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
