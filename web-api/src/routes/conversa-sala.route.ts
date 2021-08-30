import conversaSalaController, {realtime} from "../controller/conversa-sala.controller"

const setRealtimeConversaSala = io => {
    realtime(io)
}

const prefix = '/api/v1/conversa-sala'
const conversaSalaRoute = server => {
    server.get( `${prefix}/:id`, conversaSalaController.findAll)
    server.post( `${prefix}`, conversaSalaController.create)    
    
    
}    

export { setRealtimeConversaSala }
export default conversaSalaRoute