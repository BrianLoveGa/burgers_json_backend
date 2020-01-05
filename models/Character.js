const mongoose = require("../db/connection");

const CharacterSchema = new mongoose.Schema({
  name: String,
  age: Number,
  description: String,
  gender: String,
  image: String
});

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
