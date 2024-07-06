// Operador comparacion

const num1 = 20
const num2 = '20'

if(num1 == num2){
    console.log('Son iguales con ==')
} else {
    console.log('No son iguales con ==') 
}

if(num1 === num2){
    console.log('Son iguales con ===')
} else {
    console.log('No son iguales con ===') 
}

//Con == solo mira los valores y devuelve true
//Con === mira el valor y el tipo de datos, devuelve false
// Podrias hacer Number(num2)