// Arrow Functions


// Quitar function por =>
const sumar = (NUM1 = 2, NUM2 = 6) => {
    console.log(NUM1 + NUM2)
}

const tecnologies = ['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS']

//forEach
console.log('Primer ejercicio')
tecnologies.forEach((tech) => {
    console.log(tech)
})

//Primera Caracterteristica Arraw Funtions
//Si tienes solo un atributo en la funcion se puede poner:
console.log('Segundo ejercicio')
tecnologies.forEach(tech => {
    console.log(tech)
})
//Segunda Caracterteristica Arraw Funtions
// quitar las {}
//Si tienes solo una linea en la funcion se puede poner:
console.log('Tercer ejercicio')
tecnologies.forEach(tech => console.log(tech))

//map
console.log('MAP ejercicio')
//Tercera Caracterteristica Arraw Funtions
// quitar el return
//Si tienes solo una linea en la funcion se puede poner:
const arrayMap = tecnologies.map((tech) => tech)
//Misma funcion que la de arrba
const arrayMap2 = tecnologies.map(function (tech) {
    return tech
})

// console.log(arrayMap)
// console.log(arrayMap2)

//filter
console.log('FILTER ejercicio')
const tecnologies2 = tecnologies.filter(function (tech) {
    return tech !== 'HTML'

})

const tecnologies3 = tecnologies.filter(t => t !== 'HTML')
console.log(tecnologies3)

//sumar(3,4)
//sumar(332,432)
//sumar()