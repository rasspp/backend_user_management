import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import UserRoute from "./routes/UserRoute.js";
const port = 5000;

const app = express();

const dbUrl = process.env.MONGODB_URI;
mongoose.connect(dbUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.get("/", (req, res) => {
   res.send("Welcome to my server is express! new");
});

app.listen(port, () => console.log(`Server up and running in http://localhost:${port}.`));
