const posts = [
    {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body:
            "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

//Las callback fueron sustituidas por las promesas. 
// const findPostById = (id, callback) => {
//     const post = posts.find(item => item.id === id)

//     if(post){
//         callback(null, post)
//     }else{
//         //En el error undefined, por si no existe el id
//         callback("No se encontro el post con el id: " + id)
//     }

// }

// findPostById(2, (err, post)=> {
//     if (err) {
//         return console.log(err)
//     }
//     console.log(post)
// })


//Haciendo lo mismo pero con promeso, practica. 

const findPostById = (id) => {
    const post = posts.find(item => item.id === id)
    //resolve - Resp positiva  / reject - Resp negativa
    return new Promise ((resolve, reject) =>{
        
        setTimeout(() => {
            if (post) {
                resolve(post)
            }else{
                reject("El id " + id + " no se encontro")
            }
        }, 2000);

    });

}
    const buscar = async (id) => {
    //Se necesita un tryCatch para el reject de una promesa
    try {
        const post = await findPostById(id);
        console.log(post)
    } catch (err) {
        console.log(err)
    }
}

buscar(4);

// findPostById(2)
//     .then(post => console.log(post))
//     .catch((err) => console.log(err));