class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar() {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nmbre} ${this.apellido} y soy desarrollador`)
  }
}



// var camilo = new persona("Camilo", "León", 1.70)
// var erika = new persona("Erika", "Luna", 1.62)
// var arturo = new persona("Arturo", "Martinéz", 1.91)
