"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareMetersValue = void 0;
const mongoose_1 = require("mongoose");
const SquareMetersValueSchema = new mongoose_1.Schema({
    _id: { type: Number, required: false },
    CEP: { type: Number, required: true },
    Value: { type: mongoose_1.Schema.Types.Decimal128, required: true }
});
exports.SquareMetersValue = mongoose_1.model('squareMetersValues', SquareMetersValueSchema, "squareMetersValue");
