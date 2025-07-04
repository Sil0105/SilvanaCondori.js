//a) Crear una función normalizarDatos() que utilice métodos de strings para:
//✔ Convertir todos los títulos a mayúsculas.
//✔ Eliminar espacios en blanco al inicio y final de los nombres de autores.
//✔ Formatear los emails de los usuarios a minúsculas.
const prompt = require('prompt-sync')();

function normalizarDatos() {
    libros.forEach(libro => {
        libro.titulo = libro.titulo.toUpperCase(); // Convertir títulos a mayúsculas con toUpperCase()
    });

    libros.forEach(libro => {
        libro.autor = libro.autor.trim(); // String, elimina los espacios en blanco al inicio y final de los nombres de autores
    });

    usuarios.forEach(usuario => {
        usuario.email = usuario.email.toLowerCase(); //Convierte todas las letras a minúsculas
    });

    console.log("Datos actualizados 📚👥:.");
    console.log(libros);
    console.log(usuarios);
}

normalizarDatos();
