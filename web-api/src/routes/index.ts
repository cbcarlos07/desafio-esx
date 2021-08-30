import chatRoute, { setRealtimeChat } from './chat.route'
import conversaSalaRoute, { setRealtimeConversaSala } from './conversa-sala.route'
import conversaRoute from './conversa.route'
import initial from './initial.route'
import salaRoute from './sala.route'
import usuarioRoute from './usuario.route'

const routes = deps =>{
    const {server, io} = deps
    setRealtimeChat(io)
    setRealtimeConversaSala(io)
    initial(server)
    usuarioRoute(server)
    salaRoute(server)
    conversaRoute(server)
    chatRoute(server)
    conversaSalaRoute(server)
}
export default routes