import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phone_number: String,
  live_in_us: Boolean,
  git_profile: String,
  cv: String,
  cover_letter: String,
  about_us: String,
});

const userModel = mongoose.model("UserModel", userSchema);

export default userModel;
