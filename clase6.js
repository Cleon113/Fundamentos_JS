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

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(camilo)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre:"pepito"})
