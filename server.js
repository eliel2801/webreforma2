const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos da pasta build
app.use(express.static(path.join(__dirname, 'dist')));

// Rota padrão para servir o React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
