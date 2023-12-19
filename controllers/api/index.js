const router = require('express').Router();
const userRoutes = require('./userRoutes');
const printerRoutes = require('./printerRoutes');


router.use('/users', userRoutes);
router.use('/add-printer', printerRoutes);



module.exports = router;
