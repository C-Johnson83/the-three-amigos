const router = require('express').Router();
const userRoutes = require('./userRoutes');
const printerRoutes = require('./printerRoutes');
const profileRoutes = require('./profileRoutes'); 

router.use('/users', userRoutes);
router.use('/printers', printerRoutes);
router.use('/profile', profileRoutes); 

module.exports = router;