const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  id: String,
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: { type: Number, min: 1960, max: 2022 },
  publisher: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
