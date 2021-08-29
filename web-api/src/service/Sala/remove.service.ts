import salaRepository from "../../repository/salaRepository";


class RemoveService{
    remove(id: number){
        return salaRepository.del(id)
    }
}

export default new RemoveService