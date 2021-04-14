# REST API 

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

# REST API

A Collection do Postman se encontra na raiz do projeto com o nome `collectionPostman.json`

## Documentação API - Swagger


### Request

`GET /swagger`

    http://localhost:3002/swagger


## Get Valor do metro quadrado pelo CEP 

Param : cep : string

### Request

`GET /valorImmobile/squareMeters`

     'Accept: application/json' http://localhost:3002/valorImmobile/squareMeters?cep="<CEP>"

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Apr 2021 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

