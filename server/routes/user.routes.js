import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

router.post("/post", createUser);

export default router;
