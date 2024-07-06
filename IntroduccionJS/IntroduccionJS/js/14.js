// Function Expression


const sumar = function (NUM1=2, NUM2=6) {
    console.log(NUM1+NUM2)
}

//function sumar (NUM1=2, NUM2=6) {
//    console.log(NUM1+NUM2)
//}

// La diferencia entre ambas es que si a const sumar la llamas antes
// de declararla se lanza un error, pero a function sumar,si la llamas 
// antes de declararla devuelve el resultado correcto gracias a hoisting 


//Asi se llama a la funcion ¡NO OLVIDAR LOS PARENTESIS!
sumar(3,4)
sumar(332,432)
sumar()