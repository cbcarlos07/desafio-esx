import { AtualizarSalaDto } from "../../interface/sala/atualizar-sala.dto";
import { CriarSalaDTO } from "../../interface/sala/criar-sala.dto";
import createService from "./create.service";
import listService from "./list.service";
import removeService from "./remove.service";
import updateService from "./update.service";


export default {    
    findAll: () => listService.findAll(),
    create: (criar: CriarSalaDTO) => createService.create( criar ),
    atualizar: (id: number, atualizar: AtualizarSalaDto) => updateService.update(id, atualizar),
    findId: (id: number) => listService.findId(id),
    remover: (id: number) => removeService.remove(id)
}