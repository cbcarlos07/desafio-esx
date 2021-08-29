import { CriarUsuarioDto } from "../../interface/usuario/criar-usuario.dto";
import usuarioRepository from "../../repository/usuarioRepository";
import md5 from 'md5'
class CreateService{
    create(criar: CriarUsuarioDto){
        criar.senha = md5(criar.senha)
        return usuarioRepository.save(criar)
    }
}

export default new CreateService