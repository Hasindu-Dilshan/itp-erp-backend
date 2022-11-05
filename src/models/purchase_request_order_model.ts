import mongoose, { Schema, Document } from 'mongoose';

export interface PhurchaseOrder extends Document {
   _id: string,
   requestId: string,
   itemId: string,
   quantity: number,
   itemPrice : number,
}

const PhurchaseOrderSchema: Schema = new Schema({
   date: { type: Date, default: Date(), required: true },
   requestId: {type: String,required : true},
   itemId: {type: String,required : true},
   quantity:{type: String,required : true},
   itemPrice : {type:Number,required : true}
});

export default mongoose.model<PhurchaseOrder>('purchase_request_order', PhurchaseOrderSchema);






