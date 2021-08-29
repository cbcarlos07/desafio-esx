import { AtualizarUsuarioDto } from "../../interface/usuario/atualizar-usuario.dto";
import { AuthUsuarioDto } from "../../interface/usuario/auth.dto";
import { CriarUsuarioDto } from "../../interface/usuario/criar-usuario.dto";
import createService from "./create.service";
import listService from "./list.service";
import loginService from "./login.service";
import removeService from "./remove.service";
import updateService from "./update.service";

export default {
    auth: (auth: AuthUsuarioDto) => loginService.auth(auth),
    findAll: (query: number) => listService.findAll(query),
    create: (criar: CriarUsuarioDto) => createService.create( criar ),
    atualizar: (id: number, atualizar: AtualizarUsuarioDto) => updateService.update(id, atualizar),
    findId: (id: number) => listService.findId(id),
    remover: (id: number) => removeService.remove(id)
}