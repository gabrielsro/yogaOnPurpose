import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import routes from "./routes";

const app = express();

app.use("/events", routes.events);
app.use("/items", routes.items);
app.use("/pages", routes.pages);
app.use("/posts", routes.posts);
app.use("/schedule", routes.schedule);
app.use("/users", routes.users);

app.use(morgan("dev"));

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (err) {
    console.log(err);
  }
  app.listen(3003, console.log("listening on port 3003"));
})();
