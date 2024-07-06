// Operador || y &&

const disponible = 100
const retirar = 500
const tarjeta = true

if(tarjeta && disponible > retirar) {
    console.log("Puedes retirarlo")
} else {
    console.log("No puedes retirarlo, trabaja más")
}