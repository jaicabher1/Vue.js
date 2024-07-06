// Eventos del DOM = input

const inputName = document.querySelector('#nombre')
const inputPassword = document.querySelector('#password')
const heading = document.querySelector('.heading')

inputName.addEventListener('input', (event) => {
    console.log(event.target.value)
    // Forma que tienen los programas de ir contando las palabras de un input
    //console.log(e.target.value.length)

    //EJERCICIO (CAMBIAR EL HEADING MIENTRA METES EL NOMBRE)
    heading.textContent = event.target.value

   
})

inputPassword.addEventListener('input', (event) => {
    //cambiamos la contraseña de tipo password a text
    event.target.type = 'text'
    // 1000 es un segundo
    // 500 es medio segundo
    setTimeout(() => {
        event.target.type = 'password'
    }, 250)

})



