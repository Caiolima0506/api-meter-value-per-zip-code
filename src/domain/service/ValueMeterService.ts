import { SquareMetersValueRepository } from "../../repositories/SquareMetersValueRepository";


const squareMetersValueRepository = new SquareMetersValueRepository();

export  class ValueMeterService  {
  
  /**
   * 
   * @param cep {number} CEP do bairro de campinas
   * @returns {ResClimate} 
   */
  public async GetValue(cep:number) { 
    
     
    return await squareMetersValueRepository.GetSquareMetersValue(cep);

  }

}

