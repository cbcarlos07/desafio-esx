

import { CriarSalaDTO } from "../../interface/sala/criar-sala.dto";
import salaRepository from "../../repository/salaRepository";

class CreateService{
    create(criar: CriarSalaDTO){
        return salaRepository.save(criar)
    }
}

export default new CreateService