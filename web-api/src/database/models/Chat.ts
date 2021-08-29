import { DataTypes } from 'sequelize'
import { Model } from 'sequelize-typescript'
import { Sequelize } from 'sequelize'
import Usuario from './Usuario'
class Chat extends Model {

    static init(sequelize){
        super.init({
                idConversa: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                idUsuarioRemetente: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                idUsuarioDestino: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                mensagem: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
                dataMensagem: {
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.fn('now')
                }
                
            },
            { 
                tableName: 'tb_conversa_chat' ,
                sequelize,
                underscored: true
            }
            
        )
        
        
    }

    static associateRemetente(){
        
        this.belongsTo( Usuario, {
           foreignKey: {
               name:  'idUsuarioRemetente'
           },
           as: '_usuario_remetente'
       } ) 
   }
    static associateDestino(){
        
        this.belongsTo( Usuario, {
           foreignKey: {
               name:  'idUsuarioDestino'
           },
           as: '_usuario_destino'
       } ) 
   }
   
}

export default Chat