import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  result: String,
  date: Date,
});

export default mongoose.models.Assessment ||
  mongoose.model("Assessment", AssessmentSchema);