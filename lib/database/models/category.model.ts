import { Document, Schema, model, models } from "mongoose";

export interface Icategory extends Document {
  _id: string;
  name: string;
}
const categorySchema = new Schema({
  name: { type: String, required: true },
});

const Category = models.Category || model("Category", categorySchema);
