//Crear un array de objetos llamado libros que contenga al menos 10 libros. 
// Cada libro debe tener las siguientes propiedades:
//✔ id (número)
//✔ título (string),
//✔ autor (string),
//✔ año (número),
//✔ género (string),
//✔ disponible (booleano).

 const prompt = require('prompt-sync')();
 

const libros = [ //usamos esta palabra clave para declarar una constante y Libros que serian nuetsros arrays.

    { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967, género: "Realismo mágico", disponible: true },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605, género: "Novela", disponible: true },
    { id: 3, titulo: "Orgullo y prejuicio", autor: "Jane Austen", año: 1813, género: "Romance", disponible: true },
    { id: 4, titulo: "1984", autor: "George Orwell", año: 1949, género: "Distopía", disponible: true },
    { id: 5, titulo: "El gran Gatsby", autor: "F. Scott Fitzgerald", año: 1925, género: "Ficción", disponible: true },
    { id: 6, titulo:  "Crimen y castigo", autor: "Fiodor Dostoyevski", año: 1866, género: "Filosófico", disponible: false },
    { id: 7, titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943, género: "Fábula", disponible: true },
    { id: 8, titulo: "El Hobbit", autor: "J.R.R. Tolkien", año: 1937, género: "Fantasía", disponible: true },
    { id: 9, titulo: "El guardián entre el centeno", autor: "J.D. Salinger", año: 1951, género: "Ficción", disponible: false },
    { id: 10, titulo: "Fahrenheit 451", autor: "Ray Bradbury", año: 1953, género: "Ciencia ficción", disponible: false }
];         

//b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.
// Cada usuario debe tener:
//✔ id (número)
//✔ nombre (string)
//✔ email (string)
//✔ librosPrestados (array de ids de libros).

const usuarios = [ //usamos esta palabra clave para declarar la constante y Usuarios que serian nuestros arrays.
    { id: 1, nombre: "Juan Pérez", email: " juanperez004@hotmail.com", librosPrestados: [1, 3] },
    { id: 2, nombre: "María López", email: "maril0105@gmail.com", librosPrestados: [2, 4, 5] },
    { id: 3, nombre: "Carlos García", email: "carlosgar@yahoo.com.ar", librosPrestados: [6] },
    { id: 4, nombre: "Ana Martínez", email: "anamartinezbsas@gmail.com", librosPrestados: [7, 8] },
    { id: 5, nombre: "Laura Fernández", email: "laurafernandez_01@hotmail.com", librosPrestados: [9, 10] }
];  



