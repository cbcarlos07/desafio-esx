import * as restify from 'restify'
import routes from '../routes'
import { env } from '../environment'
import * as bodyParser from 'body-parser'
import corsMiddleware from 'restify-cors-middleware'
class Server {
    server: any
    port =  env.SERVER_PORT
    constructor(){
        this.server = restify.createServer()
    }

    listen(){

        require('../database/database')

        this.middleware()
        this.routesConfig()        
        this.server.listen( this.port, () =>{
            console.log(`Server is listening on port ${this.port}`);
        })
    }

    middleware(){
        this.enableCors()
        this.server.use( bodyParser.json() )
        this.server.use(restify.plugins.queryParser());
        this.server.use( bodyParser.urlencoded( {extended: true} ) )
    }

    routesConfig(){
        routes(this.server)
    }
    enableCors(){      
        const cors = corsMiddleware({
            preflightMaxAge: 5,
            origins: ['*'],
            allowHeaders: ['*'],
            exposeHeaders: ['*']
        })
        //this.app.use(cors(options))
        this.server.pre( cors.preflight )
        this.server.use( cors.actual )
    }


}



export const server = new Server()