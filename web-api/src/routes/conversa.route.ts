import conversaController from "../controller/conversa.controller"

const prefix = '/api/v1/conversa'
const conversaRoute = server => {
    server.get( `${prefix}`, conversaController.findAll)
    server.get( `${prefix}/:id`, conversaController.findId)
    server.post( `${prefix}`, conversaController.create)    
    server.del( `${prefix}/:id`, conversaController.remover)
    
}    
export default conversaRoute