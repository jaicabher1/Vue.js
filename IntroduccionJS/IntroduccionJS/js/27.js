// Eventos del DOM = submit


const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nombre = document.querySelector('#nombre')
    if(nombre.value === ''){
        console.log('El campo es obligatorio')
    }else {
        console.log('Nombre correcto')
    }

})