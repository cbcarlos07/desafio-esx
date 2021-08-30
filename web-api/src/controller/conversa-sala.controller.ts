import conversaSalaService from "../service/ConversaSala/conversa-sala.service"



let io
const realtime = socket => {
    io = socket
}
export { realtime }

class ConversaSalaController {
    findAll(req: any, res: any){
        
        conversaSalaService.findAll( req.params.id )
            .then(response => {
                res.send(response)
            })
    }
    create(req: any, res: any){
        
        conversaSalaService.create(req.body)
            .then(response => {
                io.emit('sala', response)
                res.send(response)
            })
    }

   

  

}

export default new ConversaSalaController