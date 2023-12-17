const router = require('express').Router();
const { Printer } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPrinter = await Printer.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPrinter);
  } catch (err) {
    res.status(400).json("Filament route line 14 \n"+ err.message);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const printers = await Printer.findAll({
      where: { user_id: req.session.user_id },
    });

    res.status(200).json(printers);
  } catch (err) {
    res.status(500).json("Filament route line 26 \n"+ err.message);
  }
});

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
    res.status(500).json("Filament route line 46 \n"+ err.message);
  }
});

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
    res.status(500).json("Filament route line 66 \n"+ err.message);
  }
});

module.exports = router;
