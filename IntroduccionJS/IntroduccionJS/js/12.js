//Iteradores en JS

const tecnologies = ['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS']

/*const vuejs = tecnologies[0]
const react = tecnologies[1]
const js = tecnologies[2]
const html = tecnologies[3]
const css = tecnologies[4]*/

// forEach
//nos permite ejecutaar una funcion por cada elemento de array
//similar al filter

const arrayForEach = tecnologies.forEach(function(tech, i) {
    return tech
})


//map

const arrayMap =tecnologies.map(function(tech, i) {
    return tech
})


// La diferencia entre forEach y map es que el primero solo itera por los elementos
// pero no genera un nuevo array y map te genera un nuevo array

//Este devuelve undefined
console.log(arrayForEach)
//Este devuelve el nuevo array
console.log(arrayMap)