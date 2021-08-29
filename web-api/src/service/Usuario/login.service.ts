import { AuthUsuarioDto } from "../../interface/usuario/auth.dto";
import UsuarioRepository from "../../repository/usuarioRepository";

class LoginService {
 
    auth(auth: AuthUsuarioDto){
        return new Promise((resolve, reject)=>{
            UsuarioRepository
                .auth(auth)
                .then(response => {
                    resolve(response)
                })                

        })
    }
}

export default new LoginService