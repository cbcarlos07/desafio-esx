import Usuario from '../database/models/Usuario'
import { CriarUsuarioDto } from '../interface/usuario/criar-usuario.dto'
import { AtualizarUsuarioDto } from '../interface/usuario/atualizar-usuario.dto'
import { AuthUsuarioDto } from '../interface/usuario/auth.dto'
import md5 from 'md5'
import { Op } from 'sequelize'
class UsuarioRepository {
    
    auth(auth: AuthUsuarioDto) {
        return Usuario.findOne({
            where: {
                login: auth.login,
                senha: md5( auth.senha )   
            }
        })
    }
    
    save( criarUsuario: CriarUsuarioDto) {
        return Usuario.create(criarUsuario)
    }

    update(id: number, atualziarUsuario: AtualizarUsuarioDto ) {
       
        return Usuario.update(atualziarUsuario, {where: {id}} )
    }

    del(id: number) {
        return Usuario.destroy({where: {id}})
    }

    findId(id: number ){
        return Usuario.findByPk(id)
    }

    findAll(valorPesquisado){
        
        const condition = valorPesquisado != undefined ? {
            	    id: {[Op.notIn]: [valorPesquisado]}
            	} : {}
        return Usuario.findAll({
            where: condition,
            order: [
                ['nome','asc']
            ]
        })
    }
    
}

export default new UsuarioRepository
