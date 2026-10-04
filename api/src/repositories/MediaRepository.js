const pool = require('../config/database');

class MediaRepository {
  async listar() {
    const r = await pool.query('SELECT km FROM media_dia ORDER BY dia');
    return r.rows.map((linha) => linha.km);
  }

  async atualizar(dia, km) {
    await pool.query('UPDATE media_dia SET km = $1 WHERE dia = $2', [km, dia]);
  }
}

module.exports = new MediaRepository();
