import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema({
  userId: String,
  score: Number,
  result: String,
  recommendations: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Assessment ||
  mongoose.model("Assessment", AssessmentSchema);