const router = require('express').Router();
const { Filament, Material, Printer, Settings, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  // console.log("main route")
  try {
    
    const printerData = await Printer.findAll({

          attributes: ['name']

    });

    // console.log(printerData);
    // Serialize data so the template can read it
    const printers = printerData.map((printer) => printer.get({ printer: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      printers, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    // console.log('error')
    res.status(500).json("Home route line 28: "+ err.message);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const printerData = await Printer.findAll({
      where: {
        userId: req.session.user_id
      }
    });

    const filamentData = await Filament.findAll({
      where: {
        userId: req.session.user_id
      }
    })
    // console.log(req.session.user_id)
    // console.log('filament data')
    // console.log(filamentData)

    const user = userData.get({ plain: true });
    const printers = printerData.map((printer) => printer.get( {printer: true} ));
    const filaments = filamentData.map((filament) => filament.get( {filament: true }));
    /*
    req.session.save(() => {
      req.session.printers = printers;
      req.session.filaments = filaments;

    });
    */
    res.render('profile', {
      ...user,
      printers, 
      filaments,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json("Home route line 47: " + err.message);
  }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });


module.exports = router;