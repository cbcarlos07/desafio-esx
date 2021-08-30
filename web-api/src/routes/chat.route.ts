import chatController, {realtime} from "../controller/chat.controller"

const setRealtimeChat = io => {
    realtime(io)
}

const prefix = '/api/v1/chat'
const chatRoute = server => {
    server.get( `${prefix}`, chatController.findAll)
    server.post( `${prefix}`, chatController.create)    
    server.post( `${prefix}/chat`, chatController.sendChat)    
    
    
}    

export { setRealtimeChat }
export default chatRoute