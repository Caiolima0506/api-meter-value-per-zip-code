import  mongoose from "mongoose";
import request from 'supertest';
import { Server } from '../src/index';

describe('Teste de integração da rota /valorImmobile/squareMeters', () => {

  it('GET /valorImmobile/squareMeters', async () =>{
    const res = await request(Server).get('/valorImmobile/squareMeters?cep=13025005')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect('Content-Length', '32').then(response => {

      expect(response.body).toEqual({Cep: 13025005, Value: 6495.73});
    })

  })

})

afterAll( async () =>{

  await mongoose.connection.close();
  await Server.close();
})