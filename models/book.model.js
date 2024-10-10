const { Schema, model } = require('mongoose');
const { allowedEmotions } = require('../config/constants');


const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 30,
    },
    isbn: {
        type: String,
        required: true,
        match: /^[0-9]{13}$/,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 4000 // Amazon Kindle Direct Publishing
    },
    emotions: {
        type: [String],
        required: true,
        // Iteración 4: Seria interesante que al crear un libro tan solo se puedieran isnertar en la base de datos libros que contengan la emoción Sadness, Happiness, etc...esto lo conseguimos con un enum o un 'custom validator'
        enum: allowedEmotions,
        validate: {
            validator: function (emotions) { // cuando se intente crear el documento, 'emotions' va a valer el array de emociones que le pasamos en el POST
                return emotions.length > 0
            },
            message: 'There must be at least one emotion in the list'
        }

    }

});

const Book = model('book', bookSchema);

module.exports = Book;