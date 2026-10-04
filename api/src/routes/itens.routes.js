const { Router } = require('express');
const asyncHandler = require('../utils/asyncHandler');
const controller = require('../controllers/ItemController');

const router = Router();
router.get('/', asyncHandler((req, res) => controller.listar(req, res)));
router.post('/', asyncHandler((req, res) => controller.criar(req, res)));
router.delete('/:id', asyncHandler((req, res) => controller.remover(req, res)));
router.post('/:id/concluir', asyncHandler((req, res) => controller.concluir(req, res)));
router.post('/:id/avisado', asyncHandler((req, res) => controller.marcarAvisado(req, res)));

module.exports = router;
