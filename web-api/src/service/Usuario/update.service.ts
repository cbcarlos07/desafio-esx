import { AtualizarUsuarioDto } from "../../interface/usuario/atualizar-usuario.dto";
import usuarioRepository from "../../repository/usuarioRepository";

class UpdateService{
    update(id: number, update: AtualizarUsuarioDto){
        return usuarioRepository.update(id, update)
    }
}

export default new UpdateService