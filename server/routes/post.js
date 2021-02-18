//AJOUTER POTENTIELLEMENT UNE CARTE AVEC POINTEUR A COTE DE L'ADRESSE.

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allpost", requireLogin, (req, res) => {
  Post.find() //Finds all the posts in Mongo
    .populate("postedBy", "_id name") //Populates the field postedBy with : _id & name
    .then((posts) => {
      res.json({ status: 200, posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/ajoutvitrine", requireLogin, (req, res) => {
  const {
    nomAvocat,
    nomCabinet,
    langues,
    palettePrix,
    domaine,
    anneeExperience,
    adresseCabinet,
    description,
    regionsDeservie,
    formation,
  } = req.body;
  console.log("Lawyer's info: ", req.body);
  //   if (
  //     !nomAvocat ||
  //     nomCabinet ||
  //     langues ||
  //     palettePrix ||
  //     domaine ||
  //     anneeExperience ||
  //     adresseCabinet ||
  //     description ||
  //     regionsDeservie ||
  //     formation
  //   ) {
  //     return res
  //       .status(422)
  //       .json({ status: 422, error: "PLease add all the fields" });
  //   }
  console.log("REQ.USER", req.user);

  // res.send("OKKKK")
  req.user.password = undefined;

  const shop = new Post({
    nomAvocat,
    nomCabinet,
    langues,
    palettePrix,
    domaine,
    anneeExperience,
    adresseCabinet,
    description,
    regionsDeservie,
    formation,
    postedBy: req.user,
  });
  shop
    .save()
    .then((result) => {
      console.log("RESULTS", result);
      res.json({ message: "Shop Saved", shop: result });
    })
    .catch((err) => {
      console.log("an error has occured", err);
    });
});

router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id }) //Looks for posts made by this define _id
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ status: 200, posts });
    })
    .catch((err) => {
      console.log(err);
    });
});
