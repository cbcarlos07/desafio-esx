import conversaSalaRepository from "../../repository/conversaSalaRepository.";

class RemoverService{
    remover(id: any){
        return conversaSalaRepository.remover(id)
    }
}

export default new RemoverService