


import { CriarConversaSala } from "../../interface/conversa-sala/criar-conversa.dto";
import conversaSalaRepository from "../../repository/conversaSalaRepository.";




class CreateService{
    create(criar: CriarConversaSala){
        return conversaSalaRepository.save( criar )
    }
}

export default new CreateService