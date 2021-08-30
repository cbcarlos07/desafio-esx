import chatService from "../service/Chat/chat.service"

let io
const realtime = socket => {
    io = socket
}
export { realtime }

class ChatController {
    findAll(req: any, res: any){
        
        chatService.findAll( req.query )
            .then(response => {
                res.send(response)
            })
    }
    create(req: any, res: any){
        
        chatService.create(req.body)
            .then(response => {
                io.emit('chat', response)
                res.send(response)
            })
    }

    sendChat( req: any, res: any ){
        chatService.sendChat(req.body)
            .then(response => {
                io.emit('chat', response)
                res.send(response)
            })
    }

   

  

}

export default new ChatController