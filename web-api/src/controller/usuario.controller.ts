import usuarioService from "../service/Usuario/usuario.service"
class UsuarioController {
    auth(req: any, res: any){
        usuarioService.auth(req.body)
            .then(response => {
                res.send(response)
            })
    }

    findAll(req: any, res: any){
        usuarioService.findAll(req.query.q)
            .then(response => {
                res.send(response)
            })
    }

    findId(req: any, res: any){
        
        usuarioService.findId(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

    create(req: any, res: any){
        
        usuarioService.create(req.body)
            .then(response => {
                res.send(response)
            })
    }

    update(req: any, res: any){
        
        usuarioService.atualizar(req.params.id, req.body)
            .then(response => {
                res.send(response)
            })
    }

    remover(req: any, res: any){
        
        usuarioService.remover(req.params.id)
            .then(response => {
                res.send(response)
            })
    }

}

export default new UsuarioController