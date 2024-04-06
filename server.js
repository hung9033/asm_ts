import express from "express";
import routes from "./routes/index.js";
import connectMongoDB from "./config/dbconfig.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
connectMongoDB("mongodb://127.0.0.1:27017/db_name");
routes(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
export const viteNodeApp = app;
