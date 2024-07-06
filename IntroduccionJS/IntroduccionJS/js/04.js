// Objetos

const productName = "Tablet"
const priceName = 300
const availableProduct = true

// Las {} marcan que es un objeto
const product = {
    name : "Tablet",
    price : 300,
    available : true
}

console.log(product)
// Como tabla
console.table(product)

// Como acceder a los valores de un objecto
console.log(product.name)
console.log(product['name'])

// Destructuring
const { name, available } = product
console.log("Destructuring: " + name)
console.log("Destructuring: " + available)

// object literal enhacement (Lo contrario al destructuring)

console.log("object literal")
const autheticated = true
const user = "Juan"

const newObject = {
    autheticated : autheticated,
    user : user
}

console.log(newObject)
