import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: String,
  source: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Lead ?? mongoose.model("Lead", LeadSchema);
