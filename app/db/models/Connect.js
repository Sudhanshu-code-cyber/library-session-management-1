import mongoose from "mongoose";

export default function Connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/library");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }
}
