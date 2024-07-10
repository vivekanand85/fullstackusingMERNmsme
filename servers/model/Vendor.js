import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    upi: String
  });

export default mongoose.model("Vendor",vendorSchema);