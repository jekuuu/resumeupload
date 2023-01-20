import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use("/", userRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
