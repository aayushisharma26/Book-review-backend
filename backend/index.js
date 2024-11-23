import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import signupRoute from "./routes/userRoute.js";
import booksRoute from "./routes/booksRoute.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });

app.use("/user", signupRoute);

app.use("/books",booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
