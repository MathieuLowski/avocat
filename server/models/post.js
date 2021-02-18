const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
  nomAvocat: {
    type: String,
    required: true,
  },
  nomCabinet: {
    type: String,
    required: true,
  },
  langues: {
    type: String,
    required: true,
  },
  palettePrix: {
    type: String,
    required: true,
  },
  domaine: {
    type: String,
    required: true,
  },
  anneeExperience: {
    type: Number,
    required: true,
  },
  adresseCabinet: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  formation: {
    type: String,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Post", postSchema);
