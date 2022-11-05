import mongoose, { Schema, Document } from 'mongoose';

export interface PurchaseRequest extends Document {
  _id: string,
  requestBy : string,
  totalBill : number,
  status : boolean,
}

const PurchaseRequestSchema: Schema = new Schema({
    date: {type: Date,default: Date(),required: true},
    requestBy : {type:String,required: true},
    totalBill : {type:Number,required: true},
    status : {type:Boolean,required: true},
});

export default mongoose.model<PurchaseRequest>('purchase_request',PurchaseRequestSchema);
  





