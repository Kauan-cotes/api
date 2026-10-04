const MediaRepository = require('../repositories/MediaRepository');

class MediaController {
  async listar(req, res) {
    res.json(await MediaRepository.listar());
  }

  async atualizar(req, res) {
    await MediaRepository.atualizar(req.params.dia, req.body.km);
    res.sendStatus(204);
  }
}

module.exports = new MediaController();
