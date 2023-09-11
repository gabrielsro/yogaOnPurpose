import { Schema, model } from "mongoose";
import User from "./user";

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date },
    description: { type: String },
    location: { type: String, required: true },
    mainImage: { type: String },
    secondaryImage: { type: String },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    views: { type: Number },
    organizers: [{ type: Schema.Types.ObjectId, ref: "User" }],
    status: { type: String, enum: ["published", "draft"], required: true },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true },
);

eventSchema.post("save", async function (doc, next) {
  const promises = doc.organizers.map((organizer) => {
    const promise = new Promise((resolve, reject) => {
      User.findByIdAndUpdate(organizer, { $push: { events: doc._id } })
        .then(resolve)
        .catch((err) => reject(err));
    });
    return promise;
  });
  Promise.all(promises)
    .then(next())
    .catch((err) => next(err));
});

const Event = model("Event", eventSchema);

export default Event;
