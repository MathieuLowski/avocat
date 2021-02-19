const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.post("/ajoutvitrine", (req, res) => {
  console.log("USER VITRINE INFO", req.body);
});

module.exports = router;
