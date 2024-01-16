const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const TastyMenuRouter = require("./routes/TastyMenu.routes");

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://seyagubzade:seyagubzade123@cluster0.2wwolad.mongodb.net/"
).then(()=>{
    console.log("connected to db")
});

app.use("/tasty", TastyMenuRouter);

app.listen(PORT, () => {
  console.log(`listening port on ${PORT} `);
});
