const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ erro: err.message });
});

module.exports = app;
