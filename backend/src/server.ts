require("dotenv").config({
  path: "./.env",
});
import mongoose from "mongoose";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import apiRouter from "../routes/apiRouter";

const server = express();

console.log("env vars");
console.log(process.env.MONGO_URL);

const mongoUrl = process.env.MONGO_URL as string;
if (!mongoUrl) {
  throw new Error("MONGO_URL is not defined in the environment variables");
}

mongoose
  .connect(mongoUrl, {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 10000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
  })
  .then(() => {
    server.use(helmet());
    server.use(cors());
    server.use(express.json());
    server.use(
      session({
        resave: false,
        saveUninitialized: true,
        secret: "SECRET",
        cookie: { secure: true },
      })
    );
    server.use(passport.initialize());
    server.use(passport.session());
    server.use("/api", apiRouter);

    server.get("/", (req: any, res: any) => {
      res.status(200).json({ message: "Welcome to the API" });
    });

    const PORT = process.env.PORT ?? 8080;
    server.listen(PORT, () =>
      console.log(`[+] Server listening on port ${PORT}`)
    );
  })
  .catch((error: any) => console.log({ error }));
