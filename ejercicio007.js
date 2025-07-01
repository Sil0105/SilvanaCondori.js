// a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
//✔ Promedio de años de publicación de los libros.
//✔ Año de publicación más frecuente.
//✔ Diferencia en años entre el libro más antiguo y el más nuevo.

function calcularEstadisticas() {
  const años = libros.map(libro => libro.año); // Tenemos todos los años de los libros usando .map()

  const sumaAños = años.reduce((acum, año) => acum + año, 0); // Usamos .reduce() para sumar todos los años de publicación
  const promedio = Math(sumaAños / años.length); // Calculamos el promedio dividiendo la suma de los años por la cantidad de libros

  const conteo = {}; // Cuenta cuántas veces aparece cada año y elige el más común
  años.forEach(año => {
    conteo[año] = (conteo[año] || 0) + 1;
  });
  let añoMasFrecuente = años[0];
  let maxRepeticiones = conteo[añoMasFrecuente];
  for (const año in conteo) {
    if (conteo[año] > maxRepeticiones) {
      añoMasFrecuente = parseInt(año);
      maxRepeticiones = conteo[año];
    }
  }
  const añoMasAntiguo = Math.min(...años);// Usamos Math.min para encontrar el año más antiguo
  const añoMasNuevo = Math.max(...años);// Usamos Math.max para encontrar el año más nuevo
  const diferencia = añoMasNuevo - añoMasAntiguo;

  console.log("CALCULO DE PUBLICACIONES: ");
  console.log(`- Promedio de publicación: ${promedio}`);
  console.log(`- Año más frecuente: ${añoMasFrecuente} (${maxRepeticiones} veces)`);
  console.log(`- Diferencia entre el libro más nuevo y el más antiguo: ${diferencia} años`);
}
calcularEstadisticas(); //Nos muestra los resultados de las estadísticas calculadas.



