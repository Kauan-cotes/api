const ConfigRepository = require('../repositories/ConfigRepository');

class ConfigController {
  async buscar(req, res) {
    const valor = await ConfigRepository.buscar(req.params.chave);
    res.json({ valor });
  }

  async salvar(req, res) {
    await ConfigRepository.salvar(req.params.chave, req.body.valor);
    res.sendStatus(204);
  }
}

module.exports = new ConfigController();
