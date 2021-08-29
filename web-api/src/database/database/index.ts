

const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const connection = new Sequelize( dbConfig )


import Chat from "../models/Chat"
import Conversa from "../models/Conversa"
import Sala from "../models/Sala"
import Usuario from "../models/Usuario"

Usuario.init( connection )
Sala.init( connection )

Conversa.init( connection )
Conversa.associateRemetente()
Conversa.associateDestino()

Chat.init( connection )
Chat.associateRemetente()
Chat.associateDestino()

export default Usuario