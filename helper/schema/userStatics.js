import mongoose from "mongoose";

const userStaticsSchema = new mongoose.Schema(
  {
    ip: String,
    uaData: {
      ua: String,
      browser: {
        name: String,
        version: String,
        major: String,
      },
      engine: {
        name: String,
        version: String,
      },
      os: {
        name: String,
        version: String,
      },
      device: Object,
      cpu: Object,
    },
    ismobile: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.userStatics ||
  mongoose.model("userStatics", userStaticsSchema);
