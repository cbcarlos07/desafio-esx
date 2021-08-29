import usuarioController from "../controller/usuario.controller"

const initial = server => {
    server.get( '/', (req, res, next) =>{
        res.send( {msg: 'Bem vindo à página inicial da API'} )
        next()
    })

    server.patch('/auth', usuarioController.auth)
}

export default initial