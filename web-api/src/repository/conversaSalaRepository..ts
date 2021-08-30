
import { CriarConversaSala } from '../interface/conversa-sala/criar-conversa.dto' 
import  ConversaSala  from '../database/models/ConversaSala'

class ConversaSalaRepository {
    
    
    save( criar: CriarConversaSala) {
        return ConversaSala.create(criar)
    }

    findAllChat(id: number){
        return ConversaSala.findAll({
            where: {
                idSala: id,
            },
            include: [
                {
                    association: '_usuario'
                },
                {
                    association: '_sala'
                },
            ],
            order: [
                ['dataMensagem', 'asc']
            ]
        })
    }

    remover(id: any){
        return ConversaSala.destroy({where: {id}})
    }
    
}

export default new ConversaSalaRepository
