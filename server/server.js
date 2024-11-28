// app.js

const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Importando o módulo 'path'

const app = express();

// Conexão com o MongoDB
mongoose.connect('mongodb://localhost:27017/LogiManage')
  .then(() => console.log('Conectado ao MongoDB com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Iniciar o servidor
app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});
