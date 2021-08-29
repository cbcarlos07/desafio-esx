import conversaRepository from "../../repository/conversaRepository";

class ListService {
    findAll(){
        return conversaRepository.findAll()
    }

    findId(id: number){
        return conversaRepository.findId(id)
    }


}

export default new ListService