import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Id: String,
  Password: String,
  Name: String,
  Email: String,
  Phone: Number,
  Address: String,
  Gender: String,
  Birth: String,
  rule: {
    type: String,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const user = mongoose.model("user", userSchema);
export default user;
