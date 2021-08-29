import { AtualizarSalaDto } from "../../interface/sala/atualizar-sala.dto";

import salaRepository from "../../repository/salaRepository";


class UpdateService{
    update(id: number, update: AtualizarSalaDto){
        return salaRepository.update(id, update)
    }
}

export default new UpdateService