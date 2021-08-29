const env = {
    SERVER_PORT: 3000,
    DB: {
        HOST: 'desafio-mysql',
        PORT: 3306,
        DB: 'chat',
        USERNAME: 'root',
        PWD: '123',
        DIALECT: 'mysql'
    }
}
module.exports = { env }