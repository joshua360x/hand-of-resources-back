const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()


  .post('/', async (req, res) => {
    // console.log(req.body);
    // res.json({ id: '1', ...req.body });
    const resp = await Animal.insert({ ...req.body });
    res.json(resp);
  })

  .get('/', async (req, res) => {
    // console.log(req.body);
    // res.json([req.body]);
    const resp = await Animal.getAllAnimals(req.body);
    res.json(resp);
  })

  .get('/:id', async (req, res) => {
    // req.params.id = 1;
    // res.json(req.body);
    const animal = await Animal.getAParticularAnimalByID(req.params.id);
    res.json(animal);
  });
