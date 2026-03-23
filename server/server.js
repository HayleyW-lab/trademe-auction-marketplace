const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const { Item } = require("./auction-data-cli/models/auctionData");
const connectingDb = require("./auction-data-cli/db/databaseConnection");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectingDb();

app.get("/", (req, res) => {
  res.send("Serving is running..");
});

app.get("/comparisontable", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
