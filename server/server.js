const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./config/keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("We are in");
  console.log("...");
  console.log("That's what she said");
});
mongoose.connection.on("error", (err) => {
  console.log("Uh Oh...Something is wrong: ", err);
});

//  You require the user from user.js.
//  Remember this is your blueprint of how a new user is supose to "looklike"
require("./models/user");
//require("./models/post");
require("./models/userCard");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/userCard"));
//app.use(require("./routes/post"));

app.get("/", (req, res) => {
  console.log("HOME");
  res.send("Hello my big polish friend");
});
app.get("/about", (req, res) => {
  console.log("about");
  res.send("about page");
});

app.listen(PORT, () => {
  console.log("Server is running on :", PORT);
});
