const express = require('express');

const app = express();

const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const bookRoutes = require('./routes/book.routes');

// Next() es el tercer parámetro que se puede definir en las funciones de callback de los métodos . get, post, etc.
// voy a implementar manualmente un mini-morgan

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} Me acaban de hacer una petición a ${req.url}`);
    next();
});

// Permitir peticiones des de cualquier máquina que no sea la misma des de donde se levanta esta REST API
app.use((req, res, next) => {
    // Permite que las peticiones des de un script des de cualquier origen
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());

app.get('/show-books', (req, res) => {
    res.sendFile(__dirname + '/show-books.html');
})

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // Nos conectamos a la base de datos de MongoDB
    connectDB();
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})