import { model, Schema, Model } from 'mongoose';
import { ISquareMetersValue } from '../interfaces/ISquareMetersValue';

const SquareMetersValueSchema: Schema = new Schema({
    _id: { type: Number, required:false},
    CEP: { type: Number, required: true },
    Value: { type: Schema.Types.Decimal128, required: true }
});

export const SquareMetersValue: Model<ISquareMetersValue> = model('squareMetersValues', SquareMetersValueSchema, "squareMetersValue");