# REST API
 
API Online
    https://api-meter-value-per-zip-code.herokuapp.com/

CEPs Disponíceis para consulta:

Campinas-SP

* 13025005 - Cambuí

* 13013908 - Centro

* 13077101 - Novo Taquaral

* 13049900 - Swiss Park 

* 13061236 - Castelo


# Processos para inicialização 

## Instalar os pacotes 

    npm install

## Executar os testes

    npm run test

## Executar a API

    npm start

## Executar Api Dev

    npm run dev
## Executar Api Docker/Nodemon
    docker-compose up --build

## Documentação API - Swagger

### Request

`GET /swagger`

    http://localhost:3001/swagger


## Get Valor do metro quadrado pelo CEP 

Param : cep : string

### Request

`GET /valorImmobile/squareMeters`

     'Accept: application/json' http://localhost:3001/valorImmobile/squareMeters?cep=<CEP>

### Response

    HTTP/1.1 200 OK
    Date: Thu,15 Apr 2021 14:48:57 GMT
    Status: 200 OK
    Content-Type: application/json; charset=utf-8
    Content-Length: 32

    {"Cep": <CEP>,  "Value": <Valor>}

