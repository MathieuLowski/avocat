const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Vitrine = mongoose.model("Vitrine");
const requireLogin = require("../middleware/requireLogin");

router.post("/ajoutvitrine", requireLogin, (req, res) => {
  const {
    nomAvocat,
    nomCabinet,
    langues,
    palettePrix,
    domaine,
    aneeExperience,
    description,
    regionDeservie,
    formation,
    french,
    english,
    spanish,
    italian,
    arabic,
    indian,
    chinese,
  } = req.body.userCard;
  console.log("FirstIn", req.body);
  //console.log("asdasdas", lawyerInfo);
  if (!req.body) {
    return res
      .status(404)
      .json({ status: 404, message: "You are missing some fields" });
  }
  // res.status(200).json({ status: 200, message: lawyersCard });
  //console.log("CONTINIOUS", lawyerInfo);
  const vitrine = new Vitrine({
    nomAvocat,
    nomCabinet,
    langues,
    palettePrix,
    domaine,
    aneeExperience,
    description,
    regionDeservie,
    formation,
    french,
    english,
    spanish,
    italian,
    arabic,
    indian,
    chinese,
    postedBy: req.user,
  });
  console.log("Guaco", vitrine);
  vitrine
    .save()
    .then((result) => {
      console.log("RESULT", result);
      res.json({ message: "INFO SAVED", post: result });
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
});

router.get("/vitrine", requireLogin, (req, res) => {
  Vitrine.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((data) => {
      console.log("COMING FROM MONGO", data);
      res.json({ status: 200, data });
    });
});
module.exports = router;
