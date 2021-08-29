import usuarioController from "../controller/usuario.controller"

const prefix = '/api/v1/usuario'
const usuarioRoute = server => {
    server.get( `${prefix}`, usuarioController.findAll)
    server.get( `${prefix}/:id`, usuarioController.findId)
    server.post( `${prefix}`, usuarioController.create)
    server.put( `${prefix}/:id`, usuarioController.update)
    server.del( `${prefix}/:id`, usuarioController.remover)
    
}    
export default usuarioRoute