const heading = document.querySelector('.heading')

//heading.textContent = 'Un nuevo heading'
//heading.classList.remove('text-4xl')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Valor por defecto'

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlaces => enlaces.textContent = 'Nuevo Texto para enlace'
)

console.log(heading)