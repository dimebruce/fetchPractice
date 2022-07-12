const api = 'https://jsonplaceholder.typicode.com/posts/'

// fetch(api)
    //Primero la respuesta o response se tiene que formatear a JSON
    // .then((resp) => resp.json())
    // //Luego se manda a imprimir
    // .then(data => console.log(data))
    // //Se muestra un err si la ruta del api no existe
    // .catch((err) => console.log(err))
    // //Metodo a imprimir si o si cuando pasa por el then o catch
    // .finally(() => console.log("El programa termino"))

const findPostById = async (id) =>{
    try {
        const resp = await fetch(api + id)
        const data = await resp.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

findPostById(100)