// Muchas veces cuando veaís otros códigos de testing

// podemos utilizar la función "describe" para separar los tests, por ejemplo, por los diferentes endpoints que eueremos probar
describe("/api/books", ()=> {
    // aquí van los diferentes tests para ese endpoint
    it('should return an array of books', async ()=> {
        const response = await fetch("http://localhost:3000/api/books")
    })
});

// describe("/api/books/recommendation/:emotion/random");