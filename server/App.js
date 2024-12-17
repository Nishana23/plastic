const express = require("express");
const DatabaseConnect = require("./Db/Database");
const app = express();
const path = require('path')
const userrouter = require('./Controllers/user')


const cors = require("cors");


require("dotenv").config();

app.get("/", (req, res) => {
  res.send("home");
});
app.use(express.json());


app.use(cors());
app.use("/api/v1", userrouter);



const start = async () => {  
  try {
    await DatabaseConnect();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running ${process.env.PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};
start();

module.exports = app;
