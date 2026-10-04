const ItemRepository = require('../repositories/ItemRepository');

class ItemService {
  // Marca o item como feito: reinicia a contagem se ele repete, senão remove.
  async concluir(id, kmAtual) {
    const item = await ItemRepository.buscarPorId(id);
    if (!item) return false;

    if (item.repetir > 0) {
      await ItemRepository.atualizarAlvo(id, kmAtual + item.repetir);
    } else {
      await ItemRepository.remover(id);
    }
    return true;
  }
}

module.exports = new ItemService();
