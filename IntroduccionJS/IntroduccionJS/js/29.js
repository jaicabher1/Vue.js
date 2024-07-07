// ESM - EcmaScript Modules

import texto, { sumar as suma, restar } from "./funciones.js"

/*
texto es igual que hola de funciones pq la exportamos como default 
y podemos cambiarle el nombre, SOLO UNO POR ARCHIVO
*/

//Pasos:
// Definir funciones y habilitar la exportacion
// Importar funciones para utilizarlas (TIENEN QUE TENER EL MISMO NOMBRE)
// Poner en el HTML en la etiquera <script>, type = module (Ver en index.html)
console.log(suma(10, 30))
console.log(restar(100, 30))