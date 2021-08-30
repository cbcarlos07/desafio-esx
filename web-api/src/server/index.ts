import * as restify from 'restify'
import routes from '../routes'
import { env } from '../environment'
import * as bodyParser from 'body-parser'
import corsMiddleware from 'restify-cors-middleware'
import { exec }  from 'child_process'
import realtime from '../helpers/realtime'

import path from 'path'
class Server {
    server: any
    io: any
    port =  env.SERVER_PORT
    constructor(){
        this.server = restify.createServer()
    }

    listen(){
        
        require('../database/database')
        //this.criarBancoDeDados()
       
      
        this.setRealtime()
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

    setRealtime(){
        this.io = require("socket.io")(this.server.server, {
            cors: {
                origin: [
                    'http://localhost',
                    'http://localhost:4200',
                    'http://10.0.0.20'
                ]
            }
        });
        
        realtime(this.io)
    }

    routesConfig(){
        console.log();
        const apiJS = path.resolve('src','openapi','api.js')
        const apiYML = path.resolve('src','openapi','api.yml')
        console.log('api yml', apiYML);
        
        
        //this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));
        routes({server: this.server, io: this.io})
    }

    criarBancoDeDados(){
        new Promise((resolve, reject) => {
            const migrate = exec(
              'npx sequelize db:create && npx sequelize db:migrate',
              {env: process.env},
              err => (err ? reject(err) : resolve(0))
            );
          
            // Forward stdout+stderr to this process
            migrate.stdout.pipe(process.stdout);
            migrate.stderr.pipe(process.stderr);
          });
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