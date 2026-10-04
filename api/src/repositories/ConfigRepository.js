const pool = require('../config/database');

class ConfigRepository {
  async buscar(chave) {
    const r = await pool.query('SELECT valor FROM config WHERE chave = $1', [chave]);
    return r.rows[0] ? r.rows[0].valor : null;
  }

  async salvar(chave, valor) {
    await pool.query(
      `INSERT INTO config (chave, valor) VALUES ($1, $2)
       ON CONFLICT (chave) DO UPDATE SET valor = EXCLUDED.valor`,
      [chave, String(valor)]
    );
  }
}

module.exports = new ConfigRepository();
