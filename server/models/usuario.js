const mongoose = require('mongoose');

// Definindo o esquema para o Usuário
const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  cpf: {
    type: String,
  },
});

// Criando o modelo a partir do esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario; // Exportando o modelo para uso em outras partes do código