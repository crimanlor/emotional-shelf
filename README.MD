# Emotional Shelf

<img width="200" src="https://oscarm.tinytake.com/media/16b2e3d?filename=1727036652460_TinyTake22-09-2024-10-24-09_638626334513732453.png&sub_type=thumbnail_preview&type=attachment&width=619&height=602" title="Powered by TinyTake Screen Capture"/><br>

La empresa _Emotional Shelf_ (estantería emocional) es una empresa de venta de libros. Tiene un amplio catálogo de libros como cualquier otra empresa parecida del sector. El valor añadido de esta empresa es que son especialistas en recomendar libros en función del estado anímico del lector

## La emociones

Según diversos estudios llevados a cabo por _Emotional Shel_ , las principales emociones que llevan a leer a las personas son:

- Inspiration
- Curiostity
- Espacism
- Nostalgia
- Happiness
- Sadness

Todo su catálogo de libros se basa en relacionar libros con estas emociones para su posterior recomendación

## Setup Inicial

Ejecuta el siguiente código en un cliente de MongoDB (por ejemplo el plugin de MongoDB de Visual Studio) para crear una base de datos de nombre "emotional-shelf" e insertar los 20 primeros libros.

```

use('emotional-shelf');

db.createCollection('books');

db.books.insertMany([
  {
    title: "The Alchemist",
    isbn: "9780061122415",
    price: 10.99,
    description: "A shepherd's journey to discover his personal legend.",
    emotions: ["Inspiration", "Escapism"]
  },
  {
    title: "Pride and Prejudice",
    isbn: "9780141439518",
    price: 9.99,
    description: "A classic tale of love and social standing.",
    emotions: ["Happiness", "Nostalgia"]
  },
  {
    title: "The Great Gatsby",
    isbn: "9780743273565",
    price: 11.99,
    description: "A portrayal of the American dream and its disillusionment.",
    emotions: ["Nostalgia", "Sadness"]
  },
  {
    title: "1984",
    isbn: "9780451524935",
    price: 14.99,
    description: "A dystopian novel about totalitarianism and surveillance.",
    emotions: ["Curiosity", "Sadness"]
  },
  {
    title: "The Book Thief",
    isbn: "9780375842207",
    price: 12.99,
    description: "A story narrated by Death during World War II.",
    emotions: ["Nostalgia", "Sadness"]
  },
  {
    title: "Life of Pi",
    isbn: "9780156027328",
    price: 15.99,
    description: "A young man's survival at sea with a Bengal tiger.",
    emotions: ["Escapism", "Inspiration"]
  },
  {
    title: "The Night Circus",
    isbn: "9780385534643",
    price: 16.99,
    description: "A magical competition between two young illusionists.",
    emotions: ["Curiosity", "Happiness"]
  },
  {
    title: "To Kill a Mockingbird",
    isbn: "9780061120084",
    price: 13.99,
    description: "A young girl's perspective on racial injustice in the Deep South.",
    emotions: ["Nostalgia", "Sadness"]
  },
  {
    title: "The Secret Garden",
    isbn: "9780143125378",
    price: 8.99,
    description: "A story of a girl discovering a hidden, magical garden.",
    emotions: ["Escapism", "Happiness"]
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    isbn: "9780590353427",
    price: 10.99,
    description: "A boy discovers he is a wizard and attends a magical school.",
    emotions: ["Escapism", "Happiness"]
  },
  {
    title: "The Little Prince",
    isbn: "9780156012195",
    price: 9.99,
    description: "A story about a young prince visiting various planets.",
    emotions: ["Curiosity", "Nostalgia"]
  },
  {
    title: "Eleanor Oliphant Is Completely Fine",
    isbn: "9780735220683",
    price: 14.99,
    description: "A quirky woman learns to open up and embrace life.",
    emotions: ["Happiness", "Sadness"]
  },
  {
    title: "The Catcher in the Rye",
    isbn: "9780316769488",
    price: 13.99,
    description: "A teenager's journey through alienation and loneliness.",
    emotions: ["Sadness", "Nostalgia"]
  },
  {
    title: "Anne of Green Gables",
    isbn: "9780553213133",
    price: 7.99,
    description: "The adventures of a spirited orphan girl in a new home.",
    emotions: ["Happiness", "Nostalgia"]
  },
  {
    title: "The Fault in Our Stars",
    isbn: "9780525478812",
    price: 12.99,
    description: "Two teenagers with cancer find love and meaning.",
    emotions: ["Happiness", "Sadness"]
  },
  {
    title: "The Giver",
    isbn: "9780440237686",
    price: 9.99,
    description: "A boy discovers the dark secrets of his seemingly perfect society.",
    emotions: ["Curiosity", "Sadness"]
  },
  {
    title: "The Glass Castle",
    isbn: "9780743247542",
    price: 16.99,
    description: "A memoir of resilience and the complexity of family.",
    emotions: ["Inspiration", "Nostalgia"]
  },
  {
    title: "Where the Crawdads Sing",
    isbn: "9780735219114",
    price: 15.99,
    description: "A young girl's connection with nature leads to her survival.",
    emotions: ["Escapism", "Nostalgia"]
  },
  {
    title: "The Time Traveler's Wife",
    isbn: "9780812971068",
    price: 14.99,
    description: "A love story that transcends time.",
    emotions: ["Happiness", "Nostalgia"]
  },
  {
    title: "Good Omens",
    isbn: "9780060853984",
    price: 12.99,
    description: "A comedic tale about an angel and a demon teaming up to prevent Armageddon.",
    emotions: ["Curiosity", "Happiness"]
  }
]);


```

## Principios REST

Recuerda tener en cuenta los principios REST API. Es  importante es establecer una respuesta JSON consistente y que ofrezca información del resultado de la operación

<img src="https://oscarm.tinytake.com/media/16b2dcb?filename=1727023126775_TinyTake22-09-2024-06-36-48_638626198275746876_638626199262544408.png&sub_type=thumbnail_preview&type=attachment&width=798&height=333" title="Powered by TinyTake Screen Capture"/><br>

## Iteración 1: Obtener libros

Crea una estructura suficiente Express/NodeJS para crear un endpont que sea devuelve todos los libros de la base de datos en formato JSON.

Sigue el modelo modelo-vista-controlador (MVC). Recuerda que debes crear

- El fichero app.js
- El modelo en la carpeta **models**
- Los controladores en la carpeta **controllers**
- Las rutas en la carpeta **routes**
- Todas las rutas deben ir prefijadas con el prefijo '/api'

El ruta del primer endpoint es:

`GET /api/books` 

- Debe devolver los 20 primeros libros de la base de datos en formato JSON.

## Iteración 2: Obtener los libros dada una emoción o sentimiento

La funcionalidad estrella de la API es recomendar libros en función de la emoción que lleva a leerlos. Implemetna el siguiente _endpoint_ que dada una emoción, devuelve los 20 libros clasificados con dicha emoción

`GET /api/books/recommendations/:emotion`

1. La API debe devolver un JSON con 20 libros clasificados con la emoción ':emotion'
2. La API debe devolver un error en el caso que la emoción suministrada no sea ninguna de las que maneja la REST API
  2.1 Es que si no encuentra ningún libro con la emoción suministrada devuelve un 404 /api/books/recommendations/joy. Si fuera más restrictivos, si la emoción no es ni Sadness, ni Happiness, etc, devolveríamos un 400 (Bad Request)
  2.2 Si se sumnistra un valor inválido (un número, una palabra que contiene número, etc); en tal caso el valor más adecuado es el 400 (Bad Request)

## Iteración 2.5

Usa el módulo de terceros [express-validator](https://express-validator.github.io/docs) para hacer la validación anterior, en vez de hacerlo _a mano_. 

## Iteración 3

Crea un _endpoint_ que dada una emoción, devuelva un libro de forma aleatória relcionado con esa emoción suministrada

`GET /api/books/recommendations/:emotion/random`

1. La API debe devolver un JSON con 1 libro aleatório clasificado con la emoción ':emotion'
2. La API debe devolver un error en el caso que la emoción suministrada no sea ninguna de las que maneja la REST API 

## Iteración 4

Implementa un endpoint para poder añadir un libro nuevo

`POST /api/books/`

1. La API deve devolver un JSON con el identificador (Object ID) del libro que acaba de insertar en la base de datos
2. La API debe devolver un error si algunos de los campos del POST no és un valor admitido o cualquier otro valor demasiado grande, pequeño o peligroso que pueda comprometer la creación del libro.

Usa _express-validator_ para validar los datos que recibe la API.
Usa adecuadamente también la estructura de control try...catch para capturar cualquier error de validación de los datos contra el _Schema_ de la base de datos

## Iteración 5

Nuestra base de datos no tiene una imagen para la poder adjuntarlo con la respuesta.
Sin embargo, si sabemos que Google API Books ofrece una API pública con información libros dado su ISBN.

`GET https://www.googleapis.com/books/v1/volumes?q=isbn:9780061122415`

En el ejemplo de la petición anterior nos va a dar información sobre el libro 'The Alchemist'. Fíjate que hay un campo con una URL pública donde se muestra la portada del libro.

Modifica el endpoint `GET /api/books/recommendations/:emotion/random` para que ahora adjunte la imagen de portada del libro consultando la API de Google Books. 

<img src="https://oscarm.tinytake.com/media/16b2dcd?filename=1727023388082_TinyTake22-09-2024-06-43-06_638626201876377564.png&sub_type=thumbnail_preview&type=attachment&width=277&height=280" title="Powered by TinyTake Screen Capture"/><br>









