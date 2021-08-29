

import { CriarConversaDTO } from "../../interface/conversa/criar-conversa.dto";
import conversaRepository from "../../repository/conversaRepository";

class CreateService{
    create(criar: CriarConversaDTO){
        return conversaRepository.save(criar)
    }
}

export default new CreateService