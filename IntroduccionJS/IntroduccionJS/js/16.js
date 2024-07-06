const tecnologies = ['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS']
const numbers = [10, 20, 30]

// Includes (Devuekve true si el elemento esta en el array)

let result = tecnologies.includes('GraphQL')
console.log(result)

// FindIndex (Devuelve index del elemento)
result = tecnologies.findIndex(t => t === 'JavaScript')
console.log(result)

// Some (Devuelve true si cumple la condicion algun elemento)
result = numbers.some(n => n > 25)
console.log(result)

// Find (Devuelve true si se cumple la condicion)
result = numbers.find(n => n === 10)
console.log(result)

//Every (devuelve true si TODOS cumplen la condicion)
result = numbers.every(n => n > 2)
console.log(result)

//Reduce (Opera desde el numero que le pasas todos los elementos)
// 0 + 10 + 20 + 30 = 60
result = numbers.reduce( (total, numero) => numero + total, 0)
console.log(result)
