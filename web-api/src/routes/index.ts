import chatRoute from './chat.route'
import conversaRoute from './conversa.route'
import initial from './initial.route'
import salaRoute from './sala.route'
import usuarioRoute from './usuario.route'

const routes = server =>{
    initial(server)
    usuarioRoute(server)
    salaRoute(server)
    conversaRoute(server)
    chatRoute(server)
}
export default routes