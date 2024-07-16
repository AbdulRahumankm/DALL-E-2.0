import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import postRoutes from './routes/postRoutes.js'
import delleRoutes from './routes/delleRoutes.js'

import connectDB from "./mongoDB/connect.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));


app.get('/api/v1/post', postRoutes)
app.get('/api/v1/dalleRoutes')

app.get("/", async (req, res) => {
  res.send("Hello from DELL-E");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
