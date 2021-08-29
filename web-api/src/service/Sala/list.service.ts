import salaRepository from "../../repository/salaRepository";

class ListService {
    findAll(){
        return salaRepository.findAll()
    }

    findId(id: number){
        return salaRepository.findId(id)
    }


}

export default new ListService