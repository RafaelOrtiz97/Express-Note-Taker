//dependecies
const router = require("express").Router();
const store = require("../db/store");

//get route
router.get("/notes", function(req, res) {
  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//post route
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(500).json(err));
});

// delete route
router.delete("/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});
module.exports = router;