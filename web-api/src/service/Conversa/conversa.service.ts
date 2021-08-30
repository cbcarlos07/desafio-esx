
import { CriarConversaDTO } from "../../interface/conversa/criar-conversa.dto";
import createService from "./create.service";
import listService from "./list.service";
import removeService from "./remove.service";


export default {    
    findAll: (id: number) => listService.findAll(id),
    create: (criar: CriarConversaDTO) => createService.create( criar ),    
    findId: (id: number) => listService.findId(id),
    remover: (id: number) => removeService.remove(id)
}