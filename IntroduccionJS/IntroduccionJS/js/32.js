const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"


const consultarAPI = async () => {

    const inicio = performance.now()
    
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    
    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    
    const fin = performance.now()

    console.log(`Resultado Primera Funcion: ${fin - inicio} ms`)
    //console.log(resultado)
    //console.log(resultado2)

}

const consultarAPI2 = async () => {
    const inicio = performance.now()

    //COn el promise.all, los fetch funcionan mucho mas eficientes
    const [respuesta, respuesta2] = await Promise.all([
        fetch(url),
        fetch(url2)
    ])
    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    const fin = performance.now()

    console.log(`Resultado Segunda Funcion: ${fin - inicio} ms`)
    //console.log(resultado)
    //console.log(resultado2)

   
}

consultarAPI()
consultarAPI2()
