// Arrays o Arreglos

const tecnologies = ['Vue.js', 'React', 'JavaScript', 'HTML', 'CSS']

// Agregar al final del array
tecnologies.push('Git')
// Agregar al principio del array
tecnologies.unshift('Python')

// Eliminar el elemento final
tecnologies.pop()

// Eliminar a partir de la 2 todo
//tecnologies.splice(2)
// Eliminar a partir de la 2 pero solo 1
//tecnologies.splice(2 , 1)
// Eliminar a partir de la 2 pero solo 2

//Hace un console.log de cada objeto
tecnologies.filter( function(tech){
    console.log(tech)

})

//Hace un nuevo array sin HTML
const tecnologies2 = tecnologies.filter( function(tech){
    return tech !== 'HTML'
})

const newArreglo = [...tecnologies, 'Node.js']


console.table(tecnologies)
console.table(newArreglo)
console.table(tecnologies2)

