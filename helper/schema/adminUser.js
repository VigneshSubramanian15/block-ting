import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.adminUser ||
  mongoose.model("adminUser", adminUserSchema);
