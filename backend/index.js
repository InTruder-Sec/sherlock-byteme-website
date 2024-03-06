import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import RegisterEvent from "./controllers/RegisterEvent.js";
import Verify from "./Middlewares/Verify.js";
import FormatBody from "./Middlewares/FormatBody.js";
import FeedbackRoute from "./controllers/Feedback.js";
import VerifyToken from "./controllers/VerifyToken.js";

dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN_WHITELIST,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
  await mongoose.connect(process.env.SERVER_URL);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error connecting to MongoDB", error);
}

app.get("/", (req, res) => {
  res.send("OWASP PCCOE STUDENT CHAPTER BACKEND API!");
});

app.post("/api/register", Verify, FormatBody, RegisterEvent);
app.get("/api/verify", VerifyToken);
app.post("/api/feedback", FeedbackRoute);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running on port ${process.env.PORT || 8080}`);
});
