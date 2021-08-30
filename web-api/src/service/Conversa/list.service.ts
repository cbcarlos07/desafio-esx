import conversaRepository from "../../repository/conversaRepository";

class ListService {
    findAll(id: number){
        return conversaRepository.findAll(id)
    }

    findId(id: number){
        return conversaRepository.findId(id)
    }


}

export default new ListService