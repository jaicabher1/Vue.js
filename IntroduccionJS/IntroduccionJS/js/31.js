// Fetch API con ASYNC AWAIT con try catch

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async () => {
    try {
        //con await detenemos la ejecucion del codigo hasta que tengamos respuesta
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado)

    } catch (error) {
        console.log(error)
    } finally {
        console.log("Todo Listo")
    }
}

consultarAPI()