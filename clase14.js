var camilo = {
  nombre: "Camilo",
  apellido: "Leon",
  edad: 17,
  peso: 70
}

console.log(`Al inicio del año ${camilo.nombre} pesa ${camilo.peso} kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

// function aumentaDePeso (persona) {
  //   return persona.peso += 200
  // }
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

const META = camilo.peso - 3
var dias = 0

while (camilo.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(camilo)
  }
  if (realizaDeporte) {
    adelgazar(camilo)
  }
  dias += 1
}

console.log(`pasaron ${dias} dias para que ${camilo.nombre} adelgazara 3kg`)
