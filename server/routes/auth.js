const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireLogin");

router.post("/signup", (req, res) => {
  console.log("SignupInfo", req.body);
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return res
      .status(422)
      .json({ status: 422, error: "Please add all the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ status: 422, error: "User already exists with that email" });
    }
  });
  bcrypt
    .hash(password, 12)
    .then((hashedpassword) => {
      const user = new User({
        email,
        password: hashedpassword,
        name,
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "saved successfully" });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(422)
      .json({ status: 422, error: "Please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res
        .status(422)
        .json({ status: 422, message: "Incorrect email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          //res.status(200).json({status:200, message:"Successfull SignIn"});
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email } = savedUser;
          res.json({ token, user: { _id, name, email } });
        } else {
          return res
            .status(422)
            .json({ status: 422, message: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/protected", requireLogin, (req, res) => {
  res.send("Protected mode Activated");
});

module.exports = router;
