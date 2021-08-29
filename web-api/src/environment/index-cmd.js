const env_cmd = {
    SERVER_PORT: 3000,
    DB: {
        HOST: 'localhost',
        PORT: 3306,
        DB: 'chat',
        USERNAME: 'root',
        PWD: '123',
        DIALECT: 'mysql'
    }
}
module.exports = { env_cmd }