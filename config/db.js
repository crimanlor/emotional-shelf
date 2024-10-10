// Es práctica habitual disponer de un método de conexión a base de datos en su propio fichero para no "sobrecargar" app.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexión a la base de datos realizada con éxito');
    }
    catch (error) {
        console.error(`Ha ocurrido el siguiente error: ${error.message}`);
    }
}

module.exports = connectDB;