const { Router } = require('express');
const asyncHandler = require('../utils/asyncHandler');
const controller = require('../controllers/ConfigController');

const router = Router();
router.get('/:chave', asyncHandler((req, res) => controller.buscar(req, res)));
router.put('/:chave', asyncHandler((req, res) => controller.salvar(req, res)));

module.exports = router;
