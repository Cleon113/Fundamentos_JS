class persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    var { nombre, apellido } = this
    console.log(`hola, me llamo ${nombre} ${apellido}`)
    if (fn) {
      fn(this.nombre, this.apellido, null)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

class Desarrollador extends persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    // var nombre = this.nombre
    // var apellido = this.apellido
    var { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`)
    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabia que eras desarrollador/a`)
  }
}

var camilo = new persona("Camilo", "León", 1.70)
var erika = new persona("Erika", "Luna", 1.62)
var arturo = new Desarrollador("Arturo", "Martínez", 1.91)

camilo.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
