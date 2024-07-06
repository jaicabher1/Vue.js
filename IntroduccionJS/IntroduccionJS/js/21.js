// Optinal chaining o encadenamiento opcional

const alumno = {
    nombre : 'Juan',
    clase : 'Programacion',
    aprobado : true
}

setTimeout(() => {
    alumno.examenes = {
        examen1 :10,
        examen2 :5
    }
    console.log(alumno.examenes?.examen1)
}, 3000);

// si no ponemos el ? y da error no se pinta Hola Mundo
// poniendo ?, da undefined y si pinta Hola Mundo
//Compruebas si existe la propiedad o no con el ?
console.log(alumno.examenes?.examen1)
console.log("Hola Mundo")