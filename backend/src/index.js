import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/events", routes.events);
app.use("/items", routes.items);
app.use("/pages", routes.pages);
app.use("/posts", routes.posts);
app.use("/schedule", routes.schedule);
app.use("/users", routes.users);
app.use((error, req, res, next) => {
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.status(error.statusCode).json(error);
  next();
});

/**
 * Server
 */
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (err) {
    console.log(err);
  }
  app.listen(3003, console.log("listening on port 3003"));
})();
