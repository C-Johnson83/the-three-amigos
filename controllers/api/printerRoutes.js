const router = require('express').Router();
const { Printer } = require('../../models');
const withAuth = require('../../utils/auth');

/*
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
  */

  module.exports = router