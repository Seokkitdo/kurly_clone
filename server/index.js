import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import mongoInfo from "./config/mongoInfo.js";
import userRoutes from "./routes/users.js";
const app = express();

app.use("/user", userRoutes);

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const CONNECTION_URL = mongoInfo;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((err) => console.log(err.message));
