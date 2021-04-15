import { Router, Request, Response } from 'express';
import { ResultValue } from '../domain/helpers/ResultValue';
import { ValueMeterService } from '../domain/service/ValueMeterService';
import { query, validationResult } from 'express-validator';

const router: Router = Router();

const valueMeterService = new ValueMeterService();

router.get('/SquareMeters', query('cep').isNumeric(), async (req: Request, res: Response) => {


    //validações de request
    const schemaErrors = validationResult(req);

    if (!schemaErrors.isEmpty()) {
        
        return res.status(403).send(schemaErrors.array());
    }

    let cep = Number(req.query.cep);

    valueMeterService.GetValue(cep).then((result:ResultValue)=>{
        
        if(!result){
            return res.status(404).send({msg:"não existem valores cadastrados para este CEP"})
        }

        return res.status(200).send(result);
                
    }).catch((err)=>{

        return res.status(500).send({msg:err});

    });
});

export const ValueMeterController: Router = router;