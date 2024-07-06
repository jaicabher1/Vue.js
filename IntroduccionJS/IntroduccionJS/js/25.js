
const enlaces = document.querySelectorAll('.navegacion a')
const heading = document.querySelector('.heading')

//TOMA DOS PARAMETROS, EVENTO Y LA FUNCION A EJECUTAR
//otro evento 'dblclick'
heading.addEventListener('click', (e) => {
    /* const num = 10
    if(num === 10){
        heading.textContent = 'Mi numero es 10'
    } else {
        heading.textContent = 'Mi numero NO es 10'
    } */


    heading.textContent = 'Nuevo Heading al dar click'
})

enlaces.forEach(enlace => {
    //e seria el evento si se le da o no
    enlace.addEventListener('click', (e) => {
        //PRevenir accion por defecto
        e.preventDefault()
        console.log(e.target)
        enlace.textContent = 'New Name'
    })
})