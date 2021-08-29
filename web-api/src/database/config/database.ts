
const {env} = require('../../environment')
module.exports = {
    dialect: env.DB.DIALECT,
    host: env.DB.HOST,
    username: env.DB.USERNAME,
    password: env.DB.PWD,
    database: env.DB.DB,
    port: env.DB.PORT,
    define: {
        timestamps: false
    },
    logging: false,    
    freeTableName: true
}