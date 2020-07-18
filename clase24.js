function heredaDe(prototipoHijo, prototipoPadre) {
  var fn = function() {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function persona (nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function () {
  console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, persona)

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nmbre} ${this.apellido} y soy desarrollador`)
}


// var camilo = new persona("Camilo", "León", 1.70)
// var erika = new persona("Erika", "Luna", 1.62)
// var arturo = new persona("Arturo", "Martinéz", 1.91)
