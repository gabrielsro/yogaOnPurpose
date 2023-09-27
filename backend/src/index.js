import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "./models/user";
import bcrypt from "bcryptjs";
import routes from "./routes";

const app = express();

const sessionStore = MongoStore.create({
  mongoUrl: process.env.MONGODB,
  collectionName: "sessions",
});
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
};

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        return done(null, false, { message: "Wrong password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);
passport.serializeUser((user, cb) => {
  return cb(null, user._id);
});
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
app.use("/events", routes.events);
app.use("/items", routes.items);
app.use("/pages", routes.pages);
app.use("/posts", routes.posts);
app.use("/schedule", routes.schedule);
app.use("/users", routes.users);
app.use("/login", routes.login);
app.use("/logout", routes.logout);
app.use("/contact", routes.contact);
app.use((error, req, res, next) => {
  if (!error.statusCode) {
    error.statusCode = 500;
  }
  res.json({ statusCode: error.statusCode, error: error.message });
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
