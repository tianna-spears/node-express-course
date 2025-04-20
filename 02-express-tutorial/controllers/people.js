const { people } = require('../data.js')
let currentPeople= [...people]

const getPeople= (req,res) => {
    return res
    .status(200)
    .json({ success: true, data: currentPeople })
}

const addPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide your name.' })
    }

    const newPerson = {
        id: Date.now(),
        name
    }
    currentPeople.push(newPerson);
    res.status(201).json({ success: true, person: newPerson })
}

const getPeopleByID= (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, message: `No person with this id ${id}` })
        }
        res.status(200).send({ success: true, data: person })
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = currentPeople.find(p => p.id === parseInt(id));
    if (!person) {
      return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }
  
    person.name = name;
    res.status(200).json({ success: true, data: currentPeople });
  };

const deletePeople = (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, message: `No person with this id ${id}` })
        }
        currentPeople = currentPeople.filter((person) => person.id !== Number (id))
        res.status(200).send({ success: true, data: currentPeople })
}

module.exports= { getPeople, addPeople, getPeopleByID, deletePeople, updatePerson };