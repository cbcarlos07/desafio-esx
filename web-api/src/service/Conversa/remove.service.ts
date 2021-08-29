import conversaRepository from "../../repository/conversaRepository";


class RemoveService{
    remove(id: number){
        return conversaRepository.del(id)
    }
}

export default new RemoveService