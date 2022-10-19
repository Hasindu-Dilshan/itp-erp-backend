import mongoose, { Schema, Document } from 'mongoose';

export interface PhurchaseOrder extends Document {
  _id: string,
  date: Date,
  transactionDate: Date,
  transactionType: string,
  shippingAddress: string,
  status: number,
  companyId: string,
}

const PhurchaseOrderSchema: Schema = new Schema({
    date: {type: Date,default: null,required: true},
    transactionDate: {type: Date,required: true},
    transactionType: {type: String,required: true},
    shippingAddress: {type: String,required: true},
    status: {type: Number,required: true},
    companyId: {type: String,required: true},
});

export default mongoose.model<PhurchaseOrder>('purchase_order',PhurchaseOrderSchema);
  





