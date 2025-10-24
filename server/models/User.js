import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resume: { type: String, default: "" },
  image: { type: String, default: "" },
  appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }]
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;