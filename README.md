# Prova técnica da ESX

## [1. Introdução](#intro)
## [2. O que foi usado](#uso)
## [3. Banco de dados](#db)
## [4. Script para inicialização do banco](#antes)
## [5. Executando o projeto](#run)
## [6. Lista do que foi feito](#list)
## [7. Sequelize](#sequelize)
## [8. Testes Rest](#rest)
## [9. Particularidades do Projeto](#part)

## <a id="intro">1. Introdução

Este projeto é para avaliação técnica de um desafio FullStack da ESX

Neste projeto foi desenvolvido um chat simples com comunicação backend com persistência em banco de dados

## <a id="uso">2.  O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

**NO BACKEND**

* <b>Restify</b>

Framework NodeJS para a criação de servidor 

* <b>Socket.io</b>

Para aplicação realtime


* <b>Socket.io</b>

Para aplicação realtime


* <b>Sequelize</b>

ORM para auxiliar na comunicação com o banco de dados

* <b>MySQL v8.0 </b>

O banco de dados usado no projeto

* md5

Para criptografia de senha

**NO FRONTEND**

* Angular v8.1.0

* socket.io-client

Para aplicação reativa

## <a id="db">3.  Banco de dados

O Banco de dados utilizado no projeto foi o MySQL na versão 8.0.

O repositório do Docker Compose do banco de dados utilizado encontra-se [aqui](https://github.com/cbcarlos07/docker-mysql)

![alt text](https://github.com/cbcarlos07/desafio-esx/blob/main/adicionais/mer.png)

<b>NOTA</b>

Tenha o docker instalado antes

Antes de executar o comando do docker-compose, primeiro crie a rede interna do docker:

    docker network create -d bridge mysql-network

Na pasta [er](https://github.com/cbcarlos07/desafio-ipdv/tree/master/backend/src/config/db/ddl) deste projeto encontram-se o MER (Modelo Entidade Relacionamento) e o arquivo sql.sql com inserts já realizados

Certifique-se de primeiro deixar esse __container__ em execução antes de prosseguir com a inicalização do projeto

O comando para rodar após o __container__ mysql dentro do arquivo docker-compose.yml é preciso executar o seguinte texto no terminal:

    docker-compose up -d

Este comando deixará o banco de dados executando

Caso queira ver os logs do backend rode apenas

    docker-compose up

[Voltar ao inicio](#begin)

## <a id="antes">4. Script para inicialização do banco

Antes de rodar o projeto faz-se necessária a execução do seguinte comando na pasta raiz web-api

    npm i 

Isso irá instalar os pacotes necessários para o projeto

Após instalados os pacotes necessários, é imprescindível executar o seguinte comando

    npm run create

Esse script criará o banco de dados, as tabelas e ainda insere dados de teste

Caso tenha problema em implementar o banco de dados [nesta](https://github.com/cbcarlos07/desafio-esx/tree/main/adicionais) pasta está o arquivo sql com alguns inserts 

O nome do banco de dados é **chat**

[Voltar ao inicio](#begin)

## <a id="run">5. Executando o projeto


**BACKEND**

Para executar o banco de dados junto com outras configurações, como apache, backend

Na raiz do projeto é preciso executar o comando

        docker-compose up

A api está dentro do docker chamada web-api

Mas ao executar o docker-compose o mesmo já será inicializado sendo desnecessário o comando acima    

**FRONTEND**

Depois que a API estiver inicializada e em execução, dentro da raíz do frontend é necessário rodar o comando:

        ng serve



[Voltar ao inicio](#begin)


## <a id="sequelize">6. Sequelize

 Para fins de fixação foi necessária a utlização de alguns comandos do Sequelize

* <b>Migrate</b>

        node_modules\.bin\sequelize migration:create --name=create-status

        node_modules\.bin\sequelize db:migrate:undo

* <b>Apagar banco de dados</b>

        node_modules/.bin/sequelize db:drop

* <b>Seed</b>

Criar
        
        node_modules/.bin/sequelize seed:generate --name=Usuario

Inserir
        
        node_modules\.bin\sequelize db:seed:all

Especificar

        node_modules\.bin\sequelize db:seed --seed src\config\db\database\seeders\20201027185507-Produto.js

Desfazer
        
        node_modules\.bin\sequelize db:seed:undo

Desfazer Tudo
        
        node_modules\.bin\sequelize db:seed:undo:all

[Voltar ao inicio](#begin)

## <a id="rest">7. Testes Rest

Para o teste de API foi usada a ferramenta [Insomnia](https://insomnia.rest/)

Na pasta [rest](https://github.com/cbcarlos07/desafio-ipdv/tree/master/backend/rest) deste projeto tem o arquivo com os testes

Basta importar dentro da ferramenta o arquivo `json` e as requisiçoes estão prontas

Execução dos testes é baseado no banco de dados de teste.

Na pasta [er](https://github.com/cbcarlos07/desafio-ipdv/tree/master/backend/src/config/db/ddl) encontra-se o arquivo com a base de dados de teste

**ATENÇÃO**

Caso o projeto seja testado em computadores remotos conectados à mesma rede

É preciso adicionar o ip em questão no arquivo

        web-api/src/server/index.ts

Na função setRealtime() dentro de origin

        this.io = require("socket.io")(this.server.server, {
            cors: {
                origin: [
                    'http://localhost',
                    'http://localhost:4200',
                    'http://10.0.0.20'
                ]
            }
        });

E também adicionar o ip no front no arquivo environment.prod.ts 

        api: 'http://10.0.0.20:3000',

E executar com o comando 
        
        ng build --prod       

[Voltar ao inicio](#begin)
