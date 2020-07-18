var camilo = {
  nombre: "Camilo",
  apellido: "Leon",
  edad: 17,
  peso: 70
}

console.log(`Al inicio del año ${camilo.nombre} pesa ${camilo.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

// function aumentaDePeso (persona) {
  //   return persona.peso += 200
  // }
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_DEL_ANO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(camilo)
  }else if (random < 0.5) {
    adelgazar(camilo)

  }
}

console.log(`Al final del año ${camilo.nombre} pesa ${camilo.peso.toFixed(1)} kg`)
