
const Book = require('../models/book.model');

// La idea es que toda comunicación con la base de datos y otros servicios externos (como la API de Google) se mueva a esta carpeta 'services'

exports.getBooksByEmotion = async (emotion) => {
    const books = await Book.find({ emotions: { $in: [emotion] } }).limit(20);
    return books;
}

