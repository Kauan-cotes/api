const { Router } = require('express');
const asyncHandler = require('../utils/asyncHandler');
const controller = require('../controllers/MediaController');

const router = Router();
router.get('/', asyncHandler((req, res) => controller.listar(req, res)));
router.put('/:dia', asyncHandler((req, res) => controller.atualizar(req, res)));

module.exports = router;
