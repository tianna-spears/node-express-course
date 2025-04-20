const people= require('../data.js')

const getPeople= (req,res) => {
    return res
    .status(200)
    .json({ success: true, data: people })
}

const addPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide your name.' })
    }
    res.status(201).json({ success: true, person: name })
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

const deletePeople = (req, res) => {
    const { id } = req.params
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, message: `No person with this id ${id}` })
        }
        const newPeople = people.filter((person) => person.id !== Number (id))
        res.status(200).send({ success: true, data: newPeople })
}

module.exports= { getPeople, addPeople, getPeopleByID, deletePeople };