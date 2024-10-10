const Book = require('../models/book.model');
const { validationResult } = require('express-validator');
const { getBooksByEmotion } = require('../services/book.services');


// otra forma de exportar varios recursos, ¿cuál os gusta más?
exports.getBooks = async (req, res) => {
    const books = await Book.find().limit(20);

    return res.status(200).json({
        message: "Query executed successfully",
        results: books
    })
}

exports.getRecommendationsByEmotion = async (req, res) => {
    // 1. Recuperar el valor de la ruta dinámica
    // ¿Cómo obtener el valor dinámico :emotion de /api/books/recommendations/:emotion`
    const { emotion } = req.params;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: `Error when trying to find books with emotion ${emotion}`,
            errors: errors.array({ onlyFirstError: true })
        })
    }

    // Seria interesante capitalizar las palabras siempre por si el cliente nos envia una petición tipo /api/books/recommendations/sadness , con s en minúsuclas . Incluso sería mejor utilizar una expresión regular en $in para que no tenga en cuenta ni mayúsculas ni minúsculas

    // const capitalizedEmotion = emotion.charAt(0).toUpperCase() + emotion.slice(1);

    // 2. Usar el :emotion para hacer una búsqueda en el modelo de los 20 primeros libros que incluyen la emoción ':emotion'
    const books = await getBooksByEmotion(emotion)

    // 3. Responder al cliente con un JSON con una respuesta similar a la del controlador getBooks (en cuanto a estructura de la respuesta: un objeto con las propiedad 'message' y 'results')
    res.status(200).json({
        message: "Query executed successfully for emotion " + emotion,
        results: books
    })



}

exports.getRandomRecommendationByEmotion = async (req, res) => {
    // 1. Vamos a extraer la :Emotion de la parte dinámica de la ruta
    const { emotion } = req.params;

    // 2. Vamos a recuperar todos los libros que cumplan con :emotion
    const books = await getBooksByEmotion(emotion);

    // 2.5. Calcular un elemento aleatório entre todos los libros que incluyen la emoción :emotion
    const randomBook = books[Math.floor(Math.random() * books.length)];

    // Iteración 5: Necesitamos realizar una petición a la API De Google y obtener el libro relacionado con el ISBN y encontrar una propiedad en 
    let imageURL;
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${randomBook.isbn}`);

        const data = await response.json();
        if (data.totalItems == 0) {
            // Significa que no está el libro en la base de datos de Google para ese ISBN. Vamos igualmente a rellenar la imageURL con una URL válida a un foto
            imageURL = "https://placehold.co/600x400";
        } else {
            imageURL = data.items[0].volumeInfo.imageLinks.thumbnail;
        }
    } catch (error) {
        return res.status(500).json({
            message: `Something went wonng... ${error.message}`
        })
    }
    // Iteración 5: Extraer la foto de la propiedad correcta de la variable data


    // 3. DEvolver la respuesta que esta vez va a ser un único libro
    res.status(200).json({
        message: "Query executed successfully",
        results: [{
            title: randomBook.title,
            isbn: randomBook.isbn,
            description: randomBook.description,
            price: randomBook.price,
            emotions: randomBook.emotions,
            imageURL: imageURL
        }] // Iteración 5: ¿Cómo adunto la propiedad imageUrl a este libro?
    })
}

exports.postBook = async (req, res) => {
    // TODO: Dividr el problema en pequeñas victorias: tan solo centrarse en crear el libro en la base de datos usando el modelo
    console.log("🚀 ~ file: book.controllers.js:65 ~ exports.postBook= ", req.body);

    // Aqui validar los campos del POST que ha informado express-validator
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: `Error when trying to create a book`,
            errors: errors.array({ onlyFirstError: true })
        })
    }

    const { title, isbn, price, description, emotions } = req.body
    try {

        // Iteración 4: Haced bastante console.log de los datos porque os llevaréis sorpresas. Tened a la vista el TERMINAL desplegado si os sucede cualquier error 
        const createdBook = await Book.create({
            title,
            isbn,
            price,
            description,
            emotions
        });


        // devolvemos un 201 porque es el código HTTP más adecuado para indicar que el servidor ha creado un nuevo recurso (en una base datos, en un fichero, etc.)
        res.status(201).json({
            "message": "Book created successfully",
            "bookId": createdBook._id
        });
    } catch (error) {
        // La petición que me ha hecho es incorrecta porque ha fallado al crear el libro 
        res.status(400).json({
            message: `Could not craate the book. Validation failed ${error.message}`,
        })
    }
}