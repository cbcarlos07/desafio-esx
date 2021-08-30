import salaService from "../service/Sala/sala.service"


class SalaController {
  

    findAll(req: any, res: any){
        salaService.findAll()
            .then(response => {
                res.send(response)
            })
    }

    findId(req: any, res: any){
        
        salaService.findId(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    create(req: any, res: any){
        
        salaService.create(req.body)
            .then(response => {
                res.send(response)
            })
    }

    update(req: any, res: any){
        
        salaService.atualizar(req.params.id, req.body)
            .then(response => {
                res.send(response)
            })
    }

    remover(req: any, res: any){        
        salaService.remover(req.params.id)
            .then(response => {
                res.send(response)
            }, e=>{
                res.status(500).send({msg: 'Falha ao tentar remover'},500)
            })
    }

}

export default new SalaController