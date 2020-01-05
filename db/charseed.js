const BOBs = require("../models/Character");
const burgers = require("./CharacterSeeds.json");

// clear the database of all cheerups insert original seeds

BOBS.deleteMany({})
  .then(() => {
    console.log("old cakes gone sir");
    return BOBs.insertMany(burgers);
    // create cake files from seeds
  })
  .then(() => {
    console.log(" ㋡ Character info back to original seeds 💕");
    process.exit();
  });
