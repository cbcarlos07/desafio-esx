
const {env_cmd} = require('../../environment/index-cmd')
module.exports = {
    dialect: env_cmd.DB.DIALECT,
    host: env_cmd.DB.HOST,
    username: env_cmd.DB.USERNAME,
    password: env_cmd.DB.PWD,
    database: env_cmd.DB.DB,
    port: env_cmd.DB.PORT,
    define: {
        timestamps: false
    },
    logging: false,    
    freeTableName: true
}