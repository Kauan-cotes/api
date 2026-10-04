const pool = require('../config/database');

class ItemRepository {
  async listar() {
    const r = await pool.query('SELECT * FROM itens ORDER BY km_alvo');
    return r.rows;
  }

  async buscarPorId(id) {
    const r = await pool.query('SELECT * FROM itens WHERE id = $1', [id]);
    return r.rows[0] || null;
  }

  async criar(nome, kmAlvo, repetir) {
    await pool.query(
      'INSERT INTO itens (nome, km_alvo, repetir) VALUES ($1, $2, $3)',
      [nome, kmAlvo, repetir || 0]
    );
  }

  async remover(id) {
    await pool.query('DELETE FROM itens WHERE id = $1', [id]);
  }

  async atualizarAlvo(id, kmAlvo) {
    await pool.query('UPDATE itens SET km_alvo = $1, avisado = FALSE WHERE id = $2', [kmAlvo, id]);
  }

  async marcarAvisado(id) {
    await pool.query('UPDATE itens SET avisado = TRUE WHERE id = $1', [id]);
  }
}

module.exports = new ItemRepository();
