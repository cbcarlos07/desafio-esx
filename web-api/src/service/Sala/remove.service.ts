import salaRepository from "../../repository/salaRepository";
import listService from "../ConversaSala/list.service";
import RemoverService from "../ConversaSala/remove.service";


class RemoveService{
    remove(id: number){
        return new Promise(async (resolve, reject)=>{
            const buscarSala = await listService.findAllChat(id)
            const ids = buscarSala.map((sala: any) => sala.idSala)
            
            RemoverService.remover(ids)
                .then(()=>{
                    salaRepository.del(id)
                        .then(response => {
                            resolve(response)
                        }, e =>{
                            reject(['Problema ao remover'])
                        })

                })
            
        })
    }
}

export default new RemoveService