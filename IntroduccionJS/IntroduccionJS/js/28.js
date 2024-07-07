
// Eventos del DOM = submit


const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    //Prevenir alerta duplicada
    const alertaPrevia = document.querySelector('.alerta')
    alertaPrevia?.remove()
    
    //Generar alerta
    const alerta = document.createElement('DIV')
    alerta.textContent = 'Todos los campos son obligatorios'
    alerta.classList.add('alerta', 'bg-red-500', 'text-white',
        'uppercase', 'text-sm','text-center','p-2', 'font-black')

    console.log(alerta)


    const nombre = document.querySelector('#nombre')
    if(nombre.value === ''){
        formulario.appendChild(alerta)
        setTimeout(() => {
            alerta.remove()
        }, 3000)
        console.log('El campo es obligatorio')
    }else {
        console.log('Nombre correcto')
    }

})