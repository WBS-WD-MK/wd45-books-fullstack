const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, 'Book Title is required!'] },
    author: { type: String, required: [true, 'Book Author is required!'] },
    year: { type: Number, default: 2000 },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Book', bookSchema);
