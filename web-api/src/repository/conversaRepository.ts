import { Op } from 'sequelize'
import Conversa from '../database/models/Conversa'
import { CriarConversaDTO } from '../interface/conversa/criar-conversa.dto'


class ConversaRepository {
    
    
    save( criar: CriarConversaDTO) {
        return Conversa.create(criar)
    }

    del(id: number) {
        return Conversa.destroy({where: {id}})
    }

    findId(id: number ){
        return Conversa.findByPk(id)
    }

    findAll(id: number){
        return Conversa.findAll({
            where: {
                [Op.or]: [
                    {usuarioRemetente: id},
                    {usuarioDestino: id}
                ]
            },
            include: [
                {association: '_usuario_remetente'},
                {association: '_usuario_destino'},
            ]
        })
    }
    
}

export default new ConversaRepository
