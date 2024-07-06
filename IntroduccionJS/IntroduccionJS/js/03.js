// Tipos de datos

// Undefined
let client
console.log(client)
//Para ver el tipo de dato
console.log(typeof client)

// Boolean
const discount = true

console.log(discount)
//Para ver el tipo de dato
console.log(typeof discount)

// Number
const number1 = 10
const number2 = 10.50
const number3 = -10

console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)

// String
const student = "Juan"
console.log(typeof student)

const bigNumber = BigInt(5)
console.log(typeof bigNumber)
console.log(Number(bigNumber)+ number1)

// Symbols (Nunca habra dos iguales)

const firstSymbol = Symbol(1)
console.log(typeof firstSymbol)

// Objects

const numbers = [1,2,3] 
const discount2 = null
const students = {}


console.log(typeof numbers)
console.log(typeof discount2)
console.log(typeof students)




