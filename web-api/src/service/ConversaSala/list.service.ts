import conversaSalaRepository from "../../repository/conversaSalaRepository."




class ListService {
    findAllChat(id: number){
        return conversaSalaRepository.findAllChat(id)
    }




}

export default new ListService