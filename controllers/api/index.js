const router = require('express').Router();
const userRoutes = require('./userRoutes');
const printerRoutes = require('./printerRoutes');
//const filamentRoutes  = require('./filamentRoutes');
//const settingRoutes = require('./settingRoutes');

router.use('/users', userRoutes);
router.use('/printers', printerRoutes);

module.exports = router;
