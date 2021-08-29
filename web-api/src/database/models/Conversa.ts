import { DataTypes } from 'sequelize'
import { Model } from 'sequelize-typescript'
import { Sequelize } from 'sequelize'
import Usuario from './Usuario'
class Conversa extends Model {

    static init(sequelize){
        super.init({
                
                usuarioRemetente: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                usuarioDestino: {
                    type: DataTypes.INTEGER,
                    allowNull: false
                },
                dataInicioConversa: {
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.fn('now')
                }
                
            },
            { 
                tableName: 'tb_conversa' ,
                sequelize,
                underscored: true
            }
            
        )
        
        
    }

    static associateRemetente(){
        
        this.belongsTo( Usuario, {
           foreignKey: {
               name:  'usuarioRemetente'
           },
           as: '_usuario_remetente'
       } ) 
   }
    static associateDestino(){
        
        this.belongsTo( Usuario, {
           foreignKey: {
               name:  'usuarioDestino'
           },
           as: '_usuario_destino'
       } ) 
   }
   
}

export default Conversa