const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: { type: String },
  last: { type: Number },
  buy: { type: Number },
  sell: { type: Number },
  volume: { type: Number },
  base_unit: { type: String },
});

// Create a model for cryptocurrency data
const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;