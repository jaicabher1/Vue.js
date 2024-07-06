//Destruturing of arrays

const tecnologies = ['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS']

// Sin destructuring
//const vuejs = tecnologies[0]

// Va en orden, es decir en vuejs metera en la constante la primer posicion de la lista
// si hay , , se salta una posicion

const [vuejs, , js, html] = tecnologies


console.log(vuejs)
console.log(js)
console.log(html)
