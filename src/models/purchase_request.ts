import mongoose, { Schema, Document } from 'mongoose';

export interface PhurchaseOrder extends Document {
  _id: string,
  date: Date,
  
}

const PhurchaseOrderSchema: Schema = new Schema({
    date: {type: Date,default: Date(),required: true},
    
  
});

export default mongoose.model<PhurchaseOrder>('purchase_request',PhurchaseOrderSchema);
  





