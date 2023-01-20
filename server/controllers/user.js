import fs from "fs";
import UserModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  const post = req.body;
  const newUser = new UserModel(post);
  try {
    await fs.writeFile("newfile.txt", newUser.toString(), function (err) {
      if (err) throw err;
      console.log("Data Saved successfully.");
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
