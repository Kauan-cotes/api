const ItemRepository = require('../repositories/ItemRepository');
const ItemService = require('../services/ItemService');

class ItemController {
  async listar(req, res) {
    res.json(await ItemRepository.listar());
  }

  async criar(req, res) {
    const { nome, kmAlvo, repetir } = req.body;
    if (!nome || !(kmAlvo > 0)) {
      return res.status(400).json({ erro: 'Informe nome e km de troca.' });
    }
    await ItemRepository.criar(nome, kmAlvo, repetir);
    res.sendStatus(201);
  }

  async remover(req, res) {
    await ItemRepository.remover(req.params.id);
    res.sendStatus(204);
  }

  async concluir(req, res) {
    const ok = await ItemService.concluir(req.params.id, req.body.kmAtual);
    res.sendStatus(ok ? 204 : 404);
  }

  async marcarAvisado(req, res) {
    await ItemRepository.marcarAvisado(req.params.id);
    res.sendStatus(204);
  }
}

module.exports = new ItemController();
