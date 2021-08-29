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

    findAll(){
        return Conversa.findAll()
    }
    
}

export default new ConversaRepository
