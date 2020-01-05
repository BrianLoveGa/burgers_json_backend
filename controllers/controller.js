const express = require("express");
const router = express.Router();

const Character = require("../models/Character");

//retrieve all the characters
router.get("/", (req, res) => {
    Character.find({}).then(characters => {
      res.json(characters);
    });
});

//create a new character
router.post("/create", (req, res) => {
    Character.create(req.body)
      .then(character => {
        Character.find({}).then(characters => {
          res.json(characters);
        });
      })
      .catch(err => console.error(err));
});

//get character by name -
// should use get by id in case 2 titles the same
router.get("/titles/:title", (req, res) => {
    const characterTitle = req.params.title;
    Character.findOne({ title: characterTitle }).then(character => {
        res.json(character);
    });
});

/// get by id
router.get("/character/:id", (req, res) => {
    const characterID = req.params.id;
    Character.findOne({ _id: characterID }).then(character => {
        res.json(character);
    });
});

//update dessert - by id
router.put("/edit/:id", (req, res) => {
    Character.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    })
      .then(character => {
        Character.find({}).then(character => {
          res.json(character);
        });
      })
      .catch(err => console.error(err));
});
//delete by ID
router.delete("/:id", (req, res) => {
    Character.findOneAndDelete({ _id: req.params.id }).then(character => {
      Character.find({}).then(character => {
        res.json(character);
      });
    });
});





//keep last
module.exports = router;