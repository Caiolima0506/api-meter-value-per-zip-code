"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueMeterController = void 0;
const express_1 = require("express");
const ValueMeterService_1 = require("../domain/service/ValueMeterService");
const router = express_1.Router();
const valueMeterService = new ValueMeterService_1.ValueMeterService();
router.get('/squareMeters', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let cep = Number(req.query.cep);
    valueMeterService.GetValue(cep).then((result) => {
        if (!result) {
            return res.status(404).send({ msg: "não existem valores cadastrados para este CEP" });
        }
        return res.status(200).send(result);
    }).catch((err) => {
        return res.status(500).send({ msg: err });
    });
}));
exports.ValueMeterController = router;
