import { Op } from 'sequelize'
import Chat from '../database/models/Chat'
import { BuscarChatDTO } from '../interface/chat/buscar-chat.dto'
import { CriarChatDTO } from '../interface/chat/criar-chat.dto'


class ChatRepository {
    
    
    save( criar: CriarChatDTO) {
        return Chat.create(criar)
    }

    findAllChat(buscarChatDTO: BuscarChatDTO){
        return Chat.findAll({
            where: {
                idConversa: buscarChatDTO.conversa,
                [Op.or] : [
                    {idUsuarioRemetente: buscarChatDTO.usuario},
                    {idUsuarioDestino: buscarChatDTO.usuario}
                ]
            },
            include: [
                {
                    association: '_usuario_destino'
                },
                {
                    association: '_usuario_remetente'
                },
            ],
            order: [
                ['dataMensagem', 'asc']
            ]
        })
    }
    
}

export default new ChatRepository
