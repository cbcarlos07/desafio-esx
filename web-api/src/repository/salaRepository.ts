import Sala from '../database/models/Sala'
import { AtualizarSalaDto } from '../interface/sala/atualizar-sala.dto'
import { CriarSalaDTO } from '../interface/sala/criar-sala.dto'


class SalaRepository {
    
    
    save( criar: CriarSalaDTO) {
        return Sala.create(criar)
    }

    update(id: number, atualizar: AtualizarSalaDto ) {
       
        return Sala.update(atualizar, {where: {id}} )
    }

    del(id: number) {
        return Sala.destroy({where: {id}})
    }

    findId(id: number ){
        return Sala.findByPk(id)
    }

    findAll(){
        return Sala.findAll({            
            order: [
                ['nome','asc']
            ]
        })
    }
    
}

export default new SalaRepository
