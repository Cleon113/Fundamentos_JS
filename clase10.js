var camilo = {
  nombre: "camilo",
  apellido: "leon",
  edad: 17,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if(persona.ingeniero) {
    console.log("ingeniero")
   }
   else {
     console.log("No es ingeniero")
   }

  if(persona.cocinero) {
    console.log("cocinero")
  }

  if(persona.cantante) {
    console.log("cantante")
  }

  if(persona.dj) {
    console.log("dj")
  }

  if(persona.guitarrista) {
    console.log("guitarrista")
  }

  if(persona.drone) {
    console.log("piloto de drone")
  }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
  if (esMayorDeEdad(persona)) {
    console.log("mayor de edad");
  } else {
    console.log("menor de edad");
  }
}
imprimirProfesiones(camilo)
imprimirSiEsMayorDeEdad(camilo)
