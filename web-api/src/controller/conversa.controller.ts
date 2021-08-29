import conversaService from "../service/Conversa/conversa.service"


class conversaController {
    findAll(req: any, res: any){
        conversaService.findAll()
            .then(response => {
                res.send(response)
            })
    }

    findId(req: any, res: any){
        
        conversaService.findId(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    create(req: any, res: any){
        
        conversaService.create(req.body)
            .then(response => {
                res.send(response)
            })
    }

   

    remover(req: any, res: any){
        
        conversaService.remover(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

}

export default new conversaController