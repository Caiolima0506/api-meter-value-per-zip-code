import { Router, Request, Response } from 'express';
import { ResultValue } from '../domain/helpers/ResultValue';
import { ValueMeterService } from '../domain/service/ValueMeterService';

const router: Router = Router();

const valueMeterService = new ValueMeterService();

router.get('/squareMeters', async (req: Request, res: Response) => {

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