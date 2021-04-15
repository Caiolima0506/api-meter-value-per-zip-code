import { SquareMetersValueRepository } from "../../repositories/SquareMetersValueRepository";

const squareMetersValueRepository = new SquareMetersValueRepository();
export  class ValueMeterService  {
  
  /**
   * Chama o repositório responsável por buscar o preço do metro quadrado no banco de dados
   * @param cep {number} CEP do bairro de campinas
   * @returns {Promise<ResultValue>} 
   */
  public async GetValue(cep:number) { 
    
    return await squareMetersValueRepository.GetSquareMetersValue(cep);

  }

}

