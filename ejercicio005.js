//a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays .map(), .filter(), .reduce()) 
// para generar un reporte con la siguiente información:
//✔ Cantidad total de libros.
//✔ Cantidad de libros prestados.
//✔ Cantidad de libros por género.
//✔ Libro más antiguo y más nuevo

const prompt = require('prompt-sync')();

function generarReporteLibros() {
  // Total de libros.
  const totalLibros = libros.length;

  // Libros prestados  usando .filter().Evalúa si !libro.disponible con los libros cuyo campo disponible es false (es decir, los libros prestados).
  const librosPrestados = libros.filter(libro => !libro.disponible).length;

  // Cantidad de libros por género usando .reduce()
  const cantidadPorGenero = libros.reduce((acum, libro) => {
    acum[libro.género] = (acum[libro.género] || 0) + 1;
    return acum;
  }, {});

  // Se obtiene todos los años usando .map()
  const años = libros.map(libro => libro.año);

  // El libro más antiguo: mínimo año
  const añoMin = Math.min(...años);
  const libroMasAntiguo = libros.find(libro => libro.año === añoMin);

  // El libro más nuevo: máximo año
  const añoMax = Math.max(...años);
  const libroMasNuevo = libros.find(libro => libro.año === añoMax);


   console.log("===== REPORTE DE LIBROS =====");
  console.log(`Total de libros: ${totalLibros}`);
  console.log(`Libros prestados: ${librosPrestados}`);
  console.log("Cantidad de libros por género:");
  for (const genero in cantidadPorGenero) {
    console.log(` - ${genero}: ${cantidadPorGenero[genero]}`);
  }
  console.log(`Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.año})`);
  console.log(`Libro más nuevo: "${libroMasNuevo.titulo}" (${libroMasNuevo.año})`);
}
generarReporteLibros();

//