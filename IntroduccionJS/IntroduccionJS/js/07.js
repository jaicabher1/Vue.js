// Unir 2 0 mas objetos

const product = {
    name : "Tablet",
    price : 300,
    available : true
}

const client = {
    name : "Juan",
    premium : true
}

// Con el assign ponemos los datos de product en cliente
// Modifica los datos que tienen el mismo nombre
const newObject = Object.assign(client, product)
//console.log(newObject)

// Creamos un objecto con dos objetos dentro
const newObject2 = {
    product,
    client
}
console.log(newObject2)