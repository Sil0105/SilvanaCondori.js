//a) Implementar una función librosConPalabrasEnTitulo() que identifique y
//muestre todos los libros cuyo título contiene más de una palabra 
// (no títulos que contengan números ni otros caracteres). 
// La función debe devolver un array con los títulos de esos libros y mostrarlo en la consola.

function librosConPalabrasEnTitulo() {
    const librosSoloPalabras = libros.filter(libro => { // Usamos filter para recorrer todos los libros 
        
        return libro.titulo.split(' ').length > 1 && /^[a-zA-Zñá\s]+$/.test(libro.titulo);
        // split(' ') divide el título en palabras,verifica que solo tenga letras (agrego á y ñ) y tambien espacios(\s).
    }).map(libro => libro.titulo); // Extrae solo los títulos de los libros filtrados.

    console.log("Libros solo con palabras en el título: 📚");
    console.log(librosSoloPalabras);
}

