
import { ResultValue } from "../domain/helpers/ResultValue";
import { SquareMetersValue } from "../domain/models/squareMetersValue.model";

export class SquareMetersValueRepository {
    
    /**
     * Busca o valor do metro quadrado atravéz do CEP
     * @param cepParam { number }
     * @returns {Promise<ResultValue>} dado que foi buscados no MongoDb Atlas
     */
    public async GetSquareMetersValue(cepParam:number){

        return new Promise<ResultValue>((resolve, reject)=> {

            SquareMetersValue.findOne({"CEP" : cepParam}, { _id: 0 }).then((result)=>{

                let returnResult : ResultValue = null;

                if(result){

                    returnResult = {
                        Cep : Number(result.CEP),
                        Value : Number(result.Value)
                    };
                }

                return resolve(returnResult);

            }).catch((e)=>{

                return reject(e);
                
               
            });
        }) 
    }

}