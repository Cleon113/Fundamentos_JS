function persona (nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

persona.prototype.saludar = function () {
  console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
  if (this.altura < 1.8) {
    console.log (`Hola, soy ${this.nombre} ${this.apellido} y soy bajo porque mido ${this.altura}`)
  }else {
    console.log (`Hola, soy ${this.nombre} ${this.apellido} y soy alto porque mido ${this.altura}`)
  }
}

var camilo = new persona("Camilo", "León", 1.70)
var erika = new persona("Erika", "Luna", 1.62)
var arturo = new persona("Arturo", "Martinéz", 1.91)
