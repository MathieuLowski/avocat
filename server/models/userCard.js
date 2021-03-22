const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const vitrineSchema = new mongoose.Schema({
  nomAvocat: { type: String },
  nomCabinet: { type: String },
  langues: { type: String },
  palettePrix: { type: String },
  domaine: { type: String },
  aneeExperience: { Number },
  description: { type: String },
  regionDeservie: { type: String },
  formation: { type: String },
  french: { type: String },
  english: { type: String },
  spanish: { type: String },
  italian: { type: String },
  arabic: { type: String },
  indian: { type: String },
  chinese: { type: String },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Vitrine", vitrineSchema);
