import { Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ["draft", "published"], required: true },
    uploader: { type: Schema.Types.ObjectId, ref: "User", required: true },
    uploaderName: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
    pictures: [{ type: Schema.Types.ObjectId, ref: "Picture" }],
    views: { type: Number },
  },
  { timestamps: true },
);

const Item = model("Item", itemSchema);

export default Item;
