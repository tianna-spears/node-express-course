const express = require("express");
const router = express.Router();

const {
    addPeople, 
    getPeople, 
    getPeopleByID, 
    deletePeople, 
    updatePerson} 
= require('../controllers/people')

router.get('/', getPeople)
router.post('/', addPeople)
router.get('/:id', getPeopleByID)
router.delete('/:id', deletePeople)
router.put('/:id', updatePerson)

module.exports = router;