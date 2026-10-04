require('dotenv').config();
const app = require('./app');

const porta = process.env.PORT || 3000;
app.listen(porta, '0.0.0.0', () => console.log(`API rodando na porta ${porta}`));
