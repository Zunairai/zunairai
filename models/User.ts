import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  mobile: String,
gender: String,

company: String,
employees: String,
industry: String,
environment: String,
securityLevel: String,
});

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);