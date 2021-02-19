const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const vitrineSchema = new mongoose.Schema({
  nomAvocat: {
    type: String,
    required: true,
  },
});

mongoose.model("Vitrine", vitrineSchema);
