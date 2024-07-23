const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/todoRoute");

require("dotenv").config();

const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.port || 5000;
const mongo_url = process.env.MONGODB_URL;

mongoose
  .connect(mongo_url)
  .then(() => {
    console.error("MongoDB connected successfully");
  })
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
