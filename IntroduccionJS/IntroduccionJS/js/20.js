// Operador ternario (condicion) ? si se cumple: si no se cumple


const disponible = 100
const retirar = 500
const tarjeta = true

tarjeta && disponible > retirar ? console.log("Puedes retirar") : console.log("No puedes pagar")

disponible > retirar ? console.log("Puedes retirar") :
    tarjeta ? console.log("Puedes pagar con tarjeta") : console.log("No puedes pagar")
