import mongoose, { Schema, Document } from 'mongoose';

export interface DeliveryOrder extends Document {
   _id: string,
   date: Date,
   transactionDate: Date,
   transactionType: string,
   coustomer: string,
   shippingAddress: string,
   totalBill: string,
   status: number,
   companyId: number,
}

const DeliveryOrderSchema: Schema = new Schema({
   date: { type: Date, default: null, required: true },
   transactionDate: { type: Date, default: null, required: true },
   transactionType: { type: String, required: true },
   coustomer: { type: String, required: true },
   customerType: { type: String, required: true },
   shippingAddress: { type: String, required: true },
   totalBill: { type: String, required: true },
   status: { type: Number, required: true },
   companyId: { type: Number, required: true },
   createAt: { type: Date, required: false, default: Date.now },
});

export default mongoose.model<DeliveryOrder>('deliver_order', DeliveryOrderSchema);





