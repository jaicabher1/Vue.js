// Destructuring de 2 o mas objetos

const product = {
    name : "Tablet",
    price : 300,
    available : true
}

const client = {
    name : "Juan",
    premium : true
}

//console.log(product.name)
//console.log(client.name)

// Con los : ponemos nuevas variables con el nombre que queramos
// Muy util cuando estes usando objetos de una API externa
const {name: productName} = product
const {name: clientName} = client

console.log(productName)
console.log(clientName)
