import { DataTypes } from 'sequelize'
import { Model } from 'sequelize-typescript'

class Usuario extends Model {

    static init(sequelize){
        super.init({
                
                nome: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                senha: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                login: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true
                },
                
            },
            { 
                tableName: 'tb_usuario' ,
                sequelize
            }
            
        )
        
        
    }
    /*
    static associate(models){
			const { TipoUsuario } = models
			this.belongsTo( TipoUsuario, {
			   foreignKey: {
				   name:  'idTipoUsuario'
			   },
			   as: '_tipo_usuario'
		   } ) 
	   }
    */
}

export default Usuario