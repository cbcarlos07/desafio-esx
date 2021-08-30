import { Usuario } from "../../login/usuario.interface";

export interface Chat{
    idConversa?: number
    idUsuarioRemetente: number
	idUsuarioDestino: number
	mensagem: string
    _usuario_destino?: Usuario
    _usuario_remetente?: Usuario

}