import mongoose, { Schema ,Document} from 'mongoose';


export interface SalesOder extends Document {
  _id: string;
  date: Date;
  transactionDate: Date;
  orderNumber: string;
  refferenceNumber: string;
  transactionType: string;
  orderSource: string;
  deliveryType: string;
  vehicleNumber: string;
  coustomer: string;
  customerType: string;
  salesPerson: string;
  salesOrder: string;
  purchaseOrder: string;
  shippingAddress: string;
  totalBuill: string;
  status: number;
  companyId: number;
  createAt: string;
  updateAt: string;
  deleteAt: string;
}


const SalesOrderSchema: Schema = new Schema({
  date: { type: Date, default: null, required: true },
  transactionDate: { type: Date, default: null, required: true },
  orderNumber: { type: String, required: false },
  referenceNumber: { type: String, required: true },
  transactionType: { type: String, required: true },
  orderSource: { type: String, required: true },
  deliveryType: { type: String, required: true },
  vehicleNumber: { type: String, required: false },
  coustomer: { type: String, required: true },
  customerType: { type: String, required: true },
  salesPerson: { type: String, required: true },
  salesOrder: { type: String, required: true },
  purchaseOrder: { type: String, required: true },
  shippingAddress: { type: String, required: true },
  totalBuill: { type: String, required: true },
  status: { type: Number, required: true },
  companyId: { type: Number, required: true },
  createAt: { type: String, required: false },
  updateAt: { type: String, required: false },
  deleteAt: { type: String, required: false }
});

export default mongoose.model<SalesOder>('erp_sales_order', SalesOrderSchema);
