//a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y
// permita interactuar con el sistema utilizando prompt().
//El menú debe incluir opciones para todas las funcionalidades anteriores y
//utilizar estructuras de control (if, switch, ciclos) para manejar la lógica.
const prompt = require('prompt-sync')();

function menuPrincipal() {
  let opciones;

  do {
    opciones = prompt(
      "📚 Menú Principal de Biblioteca 📚 👉 Ingresá una opción (1-5)" +
      "1. Generar reporte de libros" +
      "2. Mostrar libros con más de una palabra en el título" +
      "3. Calcular estadísticas de publicación" +
      "4. Normalizar datos de libros y usuarios" +
      "5. Salir del sistema"
    );
    // Validamos que la opción ingresada sea un número del 1 al 5

    switch (opciones) {
      case "1":
        generarReporteLibros(); 
        break;

      case "2":
        librosConPalabrasEnTitulo(); 
        break;

      case "3":
        calcularEstadisticas(); 
        break;

      case "4":
        normalizarDatos(); 
        break;

      case "5":
        console.log("👋 ¡Gracias por usar el sistema de biblioteca!");
        break;

      default:
        console.log("⚠️ Opción no válida. Por favor, elegí del 1 al 5.");
        break;
    }

  } while (opciones !== "5"); //Verifica si la condición en while(condición) es verdadera, si lo es, ejecuta el bloque de código dentro del do.
  //Do..While ejecuta el bloque primero, luego chequea.
}
menuPrincipal(); // Llamamos a la función para iniciar el menú principal.
