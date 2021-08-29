import chatService from "../service/Chat/chat.service"


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
                res.send(response)
            })
    }

    sendChat( req: any, res: any ){
        chatService.sendChat(req.body)
            .then(response => {
                res.send(response)
            })
    }

   

  

}

export default new ChatController