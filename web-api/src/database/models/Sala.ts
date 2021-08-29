import { DataTypes } from 'sequelize'
import { Model } from 'sequelize-typescript'

class Sala extends Model {

    static init(sequelize){
        super.init({
                
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
                
            },
            { 
                tableName: 'tb_sala' ,
                sequelize
            }
            
        )
        
        
    }
   
}

export default Sala