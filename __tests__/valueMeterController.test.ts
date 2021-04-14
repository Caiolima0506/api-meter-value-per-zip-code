
import request from 'supertest';
import { app } from '../src/index';

describe('Teste de integração da rota /valorImmobile/squareMeters', () => {

  it('GET /valorImmobile/squareMeters', async () =>{
    const res = await request(app).get('/valorImmobile/squareMeters?cep=13025005')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect('Content-Length', '32').then(response => {

      expect(response.body).toEqual({Cep: 13025005, Value: 6495.73});
  })

  })
})
