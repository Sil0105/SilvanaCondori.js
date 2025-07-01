//a)Implementar una función registrarUsuario(nombre, email) que agregue un 
// nuevo usuario al array usuarios.

function registrarUsuario(nombre, email) {
    const nuevoUsuario = {
        id: usuarios.length + 1, // Asignamos un nuevo ID que continue con el del ejercicio 1 
        nombre: nombre,
        email: email,
        librosPrestados: [] // El array de libros prestados va a quedar como vacío.
    };

    usuarios.push(nuevoUsuario); // Agregamos el nuevo usuario al array usuarios que ya estaba.
    console.log(`Usuario nuevo registrado: ${nombre}`);
}

//b)Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios

function mostrarTodosLosUsuarios() { //se crea esta función para mostrar a todos los usuarios que esten registrados.
    console.log("La lista de usuarios:");
    usuarios.forEach(usuario => { //Usamos forEach para recorrer el array usuarios
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Email: ${usuario.email}, Libros Prestados: ${usuario.librosPrestados}`);
    });
}

//c)Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.

function buscarUsuario(email) {

  const usuarioEncontrado = usuarios.find((usuario) => { // Usamos find para buscar el usuario por el email.
    return usuario.email.toLowerCase() === email.toLowerCase();
  });
  return usuarioEncontrado; //Aparece el usuario encontrado o puede ser  undefined)
}

//d)Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.

function borrarUsuario(nombre, email) {
//findIndex va a buscar el usuario con ese nombre y email especificado.
  const indice = usuarios.findIndex(usuario => usuario.nombre.toLowerCase() === nombre.toLowerCase() && usuario.email.toLowerCase() === email.toLowerCase()); //findIndex busca el índice del usuario con el nombre y email especificados.

  if (indice !== -1) {
    usuarios.splice(indice, 1); //splice elimina el usuario del array.
    console.log(`Usuario ${nombre} con el email ${email} fue eliminado.`);
  } else {
    console.log(`Usuario ${nombre} con el email ${email} no se ha encontrado.`);
  }
}// Va a mostrar que el usuario fue eliminado o que no se encontró.
