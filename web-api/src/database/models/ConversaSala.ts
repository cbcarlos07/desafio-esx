import { DataTypes } from 'sequelize'
import { Model } from 'sequelize-typescript'
import { Sequelize } from 'sequelize'
import Usuario from './Usuario'
import Sala from './Sala'
class ConversaSala extends Model {

    static init(sequelize){
        super.init({
                idSala: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                idUsuario: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                mensagem: {
                    type: DataTypes.TEXT,
                    allowNull: false
                },
                dataMensagem: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: Sequelize.fn('now')
                },
               
            },
            { 
                tableName: 'tb_conversa_sala' ,
                sequelize,
                underscored: true
            }
            
        )
        
        
    }

    static associate(){
        
        this.belongsTo( Usuario, {
           foreignKey: {
               name:  'idUsuario'
           },
           as: '_usuario'
       } ) 
   }
    
   static associateSala(){
        
        this.belongsTo( Sala, {
        foreignKey: {
            name:  'idUsuario'
        },
            as: '_sala'
        } ) 
    }
   
}

export default ConversaSala