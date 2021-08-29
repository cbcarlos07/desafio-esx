import salaController from "../controller/sala.controller"

const prefix = '/api/v1/sala'
const salaRoute = server => {
    server.get( `${prefix}`, salaController.findAll)
    server.get( `${prefix}/:id`, salaController.findId)
    server.post( `${prefix}`, salaController.create)
    server.put( `${prefix}/:id`, salaController.update)
    server.del( `${prefix}/:id`, salaController.remover)
    
}    
export default salaRoute