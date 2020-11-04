//======= require all dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");//Heroku deployment 

//=== Middlewares
require("./config/db"); //calls my mongoose connection to cleanup this file
app.use(express.json()); //allows me to receive JSON files from HEADER of REQUEST
app.use(cors()); //allows all requests from outside servers or apps
app.use(express.static(path.join(__dirname, "frontend", "build"))) //Heroku deployment 

//=== Routes
app.use("/api/clothings", require("./routes/clothing.route"));
app.use("/api/shoes", require("./routes/shoe.route"));
app.use("/api/watches", require("./routes/watch.route"));
app.use("/api/auth", require("./routes/auth.route"));

//=== 404 errors
// app.get("*", (req, res) => {
//   res.status(404).json({ message: "Are you lost?", code: "EB404" });
// });

//Heroku deployment 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

//=== Server PORT
app.listen(process.env.PORT, () =>
  console.log(`running on ${process.env.PORT}`)
);