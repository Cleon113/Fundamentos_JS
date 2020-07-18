var camilo = {
  nombre: "Camilo",
  apellido: "León",
  edad: 17
}

var dario = {
  nombre: "Dario",
  apellido: "susnisky",
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre    "es lo mismo que lo de abajo"
  var {nombre} = persona
  // ____RETO____
  // var {nombre, apellido, edad} = persona
  // console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`);
  // console.log(nombre.toUpperCase())
  // ____RETO____
}

imprimirNombreEnMayusculas(camilo)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({nombre:"pepito"})
