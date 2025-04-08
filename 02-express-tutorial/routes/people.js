const express = require("express");
const router = express.Router();

const {addPeople, getPeople, getPeopleByID, deletePeople} = require('../controllers/people')

router.get('/', getPeople)
router.post('/', addPeople)
router.get('/:id', getPeopleByID)
router.delete('/:id', deletePeople)

module.exports = router;