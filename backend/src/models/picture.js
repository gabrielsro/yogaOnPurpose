import { Schema, model } from "mongoose";

const picSchema = new Schema(
  {
    item: { type: Schema.Types.ObjectId, ref: "Item" },
    cdnId: { type: String, required: true },
    position: { type: Number },
  },
  { timestamps: true },
);

const Picture = model("Picture", picSchema);

export default Picture;
