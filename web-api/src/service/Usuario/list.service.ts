import usuarioRepository from "../../repository/usuarioRepository";

class ListService {
    findAll(query: number){
        return usuarioRepository.findAll(query)
    }

    findId(id: number){
        return usuarioRepository.findId(id)
    }


}

export default new ListService