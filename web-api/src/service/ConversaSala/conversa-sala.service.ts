import { CriarConversaSala } from "../../interface/conversa-sala/criar-conversa.dto";
import createService from "./create.service";
import listService from "./list.service";



export default {    
    findAll: (id: number) => listService.findAllChat(id),
    create: (criar: CriarConversaSala) => createService.create( criar ),
    
    
}