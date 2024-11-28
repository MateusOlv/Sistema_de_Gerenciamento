const mongoose = require('mongoose');

// Definindo o Schema para a coleção 'equipamentos'
const EquipamentoSchema = new mongoose.Schema({
  num_equipamento: {
    type: Number,
    required: true, // Campo obrigatório
  },
  cod_sap: {
    type: String,
    required: true, // Campo obrigatório
    trim: true, // Remove espaços em branco
  },
  alias: {
    type: String,
    required: true, // Campo obrigatório
  },
  comprimento: {
    type: Double, // Usando Double
    required: true, // Campo obrigatório
  },
  largura: {
    type: Double, // Usando Double
    required: true, // Campo obrigatório
  },
  altura: {
    type: Double, // Usando Double
    required: true, // Campo obrigatório
  },
  peso: {
    type: Double, // Usando Double
    required: true, // Campo obrigatório
  },
  valor: {
    type: Double, // Usando Double
    required: true, // Campo obrigatório
  },
  part_num: {
    type: String,
    required: true, // Campo obrigatório
  },
  serial_num: {
    type: String,
    required: true, // Campo obrigatório
  },
  motivo: {
    type: String,
    required: true, // Campo obrigatório
  },
  origem: {
    type: String,
    required: true, // Campo obrigatório
  },
  end_origem: {
    type: String,
    required: true, // Campo obrigatório
  },
  nome_resp_coleta: {
    type: String,
    required: true, // Campo obrigatório
  },
  tel_resp_coleta: {
    type: String,
    required: true, // Campo obrigatório
  },
  data_coleta: {
    type: Date,
    required: true, // Campo obrigatório
  },
  hora_coleta: {
    type: String,
    required: true, // Campo obrigatório
  },
  destino: {
    type: String,
    required: true, // Campo obrigatório
  },
  end_destino: {
    type: String,
    required: true, // Campo obrigatório
  },
  nome_resp_entrega: {
    type: String,
    required: true, // Campo obrigatório
  },
  tel_resp_entrega: {
    type: String,
    required: true, // Campo obrigatório
  },
  data_entrega: {
    type: Date,
    required: true, // Campo obrigatório
  },
  hora_entrega: {
    type: String,
    required: true, // Campo obrigatório
  },
});

// Criando o modelo com base no schema
const Equipamento = mongoose.model('Equipamento', EquipamentoSchema);

module.exports = Equipamento;
