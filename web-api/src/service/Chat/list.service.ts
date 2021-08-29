import { BuscarChatDTO } from "../../interface/chat/buscar-chat.dto";
import chatRepository from "../../repository/chatRepository";

class ListService {
    findAllChat(buscarChatDTO: BuscarChatDTO){
        return chatRepository.findAllChat(buscarChatDTO)
    }




}

export default new ListService