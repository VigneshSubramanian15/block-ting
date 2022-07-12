import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.consultation ||
  mongoose.model("consultation", consultationSchema);
