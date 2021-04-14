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
exports.SquareMetersValueRepository = void 0;
const squareMetersValue_model_1 = require("../domain/models/squareMetersValue.model");
class SquareMetersValueRepository {
    GetSquareMetersValue(cepParam) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                squareMetersValue_model_1.SquareMetersValue.findOne({ "CEP": cepParam }, { _id: 0 }).then((result) => {
                    let returnResult = null;
                    if (result) {
                        returnResult = {
                            Cep: Number(result.CEP),
                            Value: Number(result.Value)
                        };
                    }
                    return resolve(returnResult);
                }).catch((e) => {
                    return reject(e);
                });
            });
        });
    }
}
exports.SquareMetersValueRepository = SquareMetersValueRepository;
