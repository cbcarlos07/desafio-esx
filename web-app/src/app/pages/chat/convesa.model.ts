import { Usuario } from "../login/usuario.interface";

export interface Conversa{
    id?: number
    usuarioRemetente: number
    usuarioDestino: number
    dataInicioConversa: string,
    _usuario_remetente?: Usuario
    _usuario_destino?: Usuario
}