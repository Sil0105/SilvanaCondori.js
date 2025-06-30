//a)Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

function agregarLibro(id, titulo, autor, año, genero) { // Esta función agrega un nuevo libro al array libros.
    const nuevoLibro = {
        id: 11, titulo: "Mujeres tenian que ser", autor: "Felipe Pigna",año: "2014",genero: "Historia",
        disponible: true // True el libro está en stock, si fuera false no estaría en stock.
    };
    
    libros.push(nuevoLibro);// Push va a agregar el nuevo libro al array libros

    console.log(`Libro agregado: ${titulo}`);
}


//b)Crear una función buscarLibro(criterio, valor) que permita buscar libros por título, 
// autor o género utilizando el algoritmo de búsqueda lineal.

function buscarLibro(criterio, valor) {
  return libros.filter(libro => libro[criterio] == valor); //Usamos el método filter para recorrer el array libros.
  
}

//Desarrollar una función ordenarLibros(criterio) que ordene los libros por título
//  o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) 
// luego muestre los libros ordenados en la consola.

function ordenarLibros(criterio) {
  libros.sort((a, b) => {
    let valorA = a[criterio];
    let valorB = b[criterio];
    // Comparamos los valores según el criterio que elegimos .
    if (typeof valorA === 'string') {
      valorA = valorA.toLowerCase();
        valorB = valorB.toLowerCase();
    }

    if (valorA > valorB) {
      return 1; //Si el valor de a es mayor que el de b, se coloca después.
    }
    if ( valorA < valorB) {
      return -1; //Si el valor de a es menor que el de b, se coloca antes.
    }
    return 0; //Si son iguales no cambiaria el orden de los libros.
  });

  console.log(`Libros ordenados por ${criterio}: 📚`);
  console.log(libros);
} // Esta función ordena los libros por el criterio especificado (el título o el año).


//Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.

function borrarLibro(id) {
  const indice = libros.findIndex(libro => libro.id === id); // findIndex busca el índice del libro con el id especificado.
  
  if (indice !== -1) {
    libros.splice(indice, 1); //splice elimina el libro del array.Elimina 1 elemento desde la posición indice
    console.log(`Libro con el ID ${id} fue eliminado.📚`);
  } else {
    console.log(`Libro con el ID ${id} no se ha encontrado.`);
  }
} 
