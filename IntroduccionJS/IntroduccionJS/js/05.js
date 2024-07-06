
const product = {
    name : "Tablet",
    price : 300,
    available : true
}

//Con freeze no te permite cambiar el objecto
// Object.freeze(product)

//Con seal no te permite añadir ni eliminar
// Object.seal(product)

// Reescribir un valor aunque el objeto sea const
product.name = "Monitor Curvo"

// Añadir valor al objeto
product.imagen = "imagen.jpg"

// Eliminar 
delete product.imagen

const {available, precio, ...product2} = product


console.log(product)
// Nuevo objeto sin precio ni available
console.log(product2)