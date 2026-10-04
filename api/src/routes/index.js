const { Router } = require('express');

const router = Router();
router.use('/config', require('./config.routes'));
router.use('/medias', require('./media.routes'));
router.use('/itens', require('./itens.routes'));

module.exports = router;
