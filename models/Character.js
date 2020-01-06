const mongoose = require("../db/connection");

const CharacterSchema = new mongoose.Schema({
  name: String,
  age: String,
  description: String,
  gender: String,
  voice:String,
  image: String
});

const Character = mongoose.model("Character", CharacterSchema);

// All info is from Jan 2020 Wiki pedia pages
// https://en.wikipedia.org/wiki/Bob%27s_Burgers#Belcher_family
// https://en.wikipedia.org/wiki/List_of_Bob%27s_Burgers_characters

module.exports = Character;
