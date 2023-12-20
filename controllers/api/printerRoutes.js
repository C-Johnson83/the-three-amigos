const router = require('express').Router();
const { Printer } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to render the "Add Printer" form
router.get('/', withAuth, (req, res) => {
  try {
    res.render('add-printer', {
      logged_in: req.session.logged_in 
    }); 
  } catch (err) {
    res.status(500).json( err.message + 'Internal server error' );
  }
});

// Route to handle the form submission and add a new printer
router.post('/', withAuth, async (req, res) => {
  try {
    const { p_name, manufacturer, model } = req.body;
    console.log(req.body.p_name, req.body.manufacturer, req.body.model, req.session.user_id)
    // Create a new printer
    const newPrinter = await Printer.create({
      name: p_name,
      manufacturer: manufacturer,
      model: model,
      userId: req.session.user_id,
    });

    res.status(200).json(newPrinter);
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
