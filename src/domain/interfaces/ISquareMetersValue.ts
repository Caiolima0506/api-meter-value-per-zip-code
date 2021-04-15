import { Schema,  Document } from 'mongoose';
export interface ISquareMetersValue extends Document {
    CEP: Number,
    Value: Schema.Types.Decimal128
}