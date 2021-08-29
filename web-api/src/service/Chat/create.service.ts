

import { CriarChatDTO } from "../../interface/chat/criar-chat.dto";
import { CriarConversaDTO } from "../../interface/conversa/criar-conversa.dto";
import chatRepository from "../../repository/chatRepository";
import conversaRepository from "../../repository/conversaRepository";

class CreateService{
    create(criar: CriarChatDTO){
        return new Promise((resolve, reject)=>{
            const { idUsuarioRemetente, idUsuarioDestino } = criar
            const criarConversaDTO: CriarConversaDTO = {
                usuarioRemetente: idUsuarioRemetente,
                usuarioDestino: idUsuarioDestino
            }
            conversaRepository.save(criarConversaDTO)
                .then(response => {
                    criar.idConversa = response.id
                    chatRepository.save( criar ).then((response1) => resolve(response1))
                })

        })
    }

    sendChat(criar: CriarChatDTO){
        return chatRepository.save( criar )
    }
}

export default new CreateService