import mongoose, { Schema, Document } from 'mongoose';

export interface Item extends Document {
   _id: string,
   name: string,
   instock: boolean,
   manufacturedBy: string,
   companyId: string,
}

const ItemSchema: Schema = new Schema({
   name: { type: String, required: true },
   instock: { type: Boolean, required: true },
   manufacturedBy: { type: String, required: true },
   createAt: { type: Date, required: false, default: Date.now },
   companyId: { type: String, required: true }
});

export default mongoose.model<Item>('item', ItemSchema);





