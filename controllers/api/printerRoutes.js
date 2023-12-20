const router = require('express').Router();
const { Printer } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to render the "Add Printer" form
router.get('/', withAuth, (req, res) => {
  try {
    res.render('add-printer'); 
  } catch (err) {
    res.status(500).json( err.message + 'Internal server error' );
  }
});

// Route to handle the form submission and add a new printer
router.post('/', withAuth, async (req, res) => {
  console.log("I am working", req.body)
  try {
    const { name, manufacturer } = req.body;

    // Create a new printer
    const newPrinter = await Printer.create({
      name,
      manufacturer,
      model,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPrinter);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
