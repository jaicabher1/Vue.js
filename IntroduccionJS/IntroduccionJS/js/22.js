// Scope (Contexto en que se define y acceden las variables)

let precio = 300

function unaFUncion(){
    // Poniendo el let dice que la vble solo existe dentro de la funcion
    // y no cmabiaria el valor, solo lo cambia dentro de la funcion
    let precio = 100
    console.log(precio)
}
//Pinta 100
unaFUncion()
//Pinta 300
console.log(precio)