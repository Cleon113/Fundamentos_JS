var camilo = {
  nombre: "Camilo",
  apellido: "Leon",
  altura: 1,72
}

var alan = {
  nombre: "Alan",
  apellido: "Perez",
  altura: 1,68
}

var martin = {
  nombre: "Martin",
  apellido: "Gomez",
  altura: 1,85
}

var dario = {
  nombre: "Dario",
  apellido: "Juarez",
  altura: 1,71
}

var vicky = {
  nombre: "Vicky",
  apellido: "Zapata",
  altura: 1,56
}

var paula = {
  nombre: "Paula",
  apellido: "Barros",
  altura: 1,76
}

var personas = [camilo, alan, martin, dario, vicky, paula]

for (var i = 0; i < personas.lenght; i++) {
  var persona = personas[i]
  console.log(`${persona.nombre} mide ${persona.altura}mts`)
}
