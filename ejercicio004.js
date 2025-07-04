//a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y
//  lo agregue a la lista de libros prestados del usuario.
const prompt = require('prompt-sync')();

function prestarLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // Find buscará el libro por su id.
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); //Find buscará al usuario por su id.

    if (libro && usuario) { 
        if (libro.disponible) { // Verifica si el libro está disponible.
            libro.disponible = false; // Marca el libro como no disponible.
            usuario.librosPrestados.push(libro.id); // Push agrega el id del libro a la lista de libros prestados del usuario.
            console.log(`Libro "${libro.titulo}" prestado a ${usuario.nombre}.`);
        } else {
            console.log(`El libro "${libro.titulo}" no está disponible.`);
        }
    } 
}

//b)Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y 
// lo elimine de la lista de libros prestados del usuario.

function devolverLibro(idLibro, idUsuario) {
    const libro = libros.find(libro => libro.id === idLibro); // Find buscará el libro por su id.
    const usuario = usuarios.find(usuario => usuario.id === idUsuario); //Find buscará al usuario por su id.

    if (libro && usuario) {
        if (!libro.disponible && usuario.librosPrestados.includes(libro.id)) { // En este punto se verifica si el libro no está disponible y si el usuario lo tiene prestado.
            libro.disponible = true; // True marcará que el libro está disponible.
            usuario.librosPrestados = usuario.librosPrestados.filter(id => id !== libro.id); // Elimina el libro cuyo id coincide con libro.id del array librosPrestados del usuario.
            console.log(`Libro "${libro.titulo}" devuelto por ${usuario.nombre}.`);
        } else {
            console.log(`El libro "${libro.titulo}" no está prestado a ${usuario.nombre}.`);
        }
}    
}

