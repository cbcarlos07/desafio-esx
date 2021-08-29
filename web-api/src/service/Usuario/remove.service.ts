import usuarioRepository from "../../repository/usuarioRepository";

class RemoveService{
    remove(id: number){
        return usuarioRepository.del(id)
    }
}

export default new RemoveService