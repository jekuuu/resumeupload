import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(cors());
app.use("/", userRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
