import fs from "fs";
import UserModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  const post = req.body;

  const newUser = new UserModel(post);
  console.log(">>>", post);
  console.log(newUser);

  try {
    await fs.writeFile("newfile.txt", newUser.toString(), function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
