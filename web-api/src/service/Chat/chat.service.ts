
import { BuscarChatDTO } from "../../interface/chat/buscar-chat.dto";
import { CriarChatDTO } from "../../interface/chat/criar-chat.dto";
import createService from "./create.service";
import listService from "./list.service";


export default {    
    findAll: (buscarChatDTO: BuscarChatDTO) => listService.findAllChat(buscarChatDTO),
    create: (criar: CriarChatDTO) => createService.create( criar ),
    sendChat: (criar: CriarChatDTO) => createService.sendChat( criar )
    
}