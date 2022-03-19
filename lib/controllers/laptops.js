const { Router } = require('express');
const Laptop = require('../models/Laptop');

module.exports = Router()
  .post('/', async (req, res) => {
    const resp = await Laptop.insert(req.body);
    res.json(resp);
  })

  .get('/', async (req, res) => {
    const resp = await Laptop.getAllLaptops();
    res.json(resp);
  })

  .get('/:id', async (req, res) => {
    const resp = await Laptop.getParticularLaptop(req.params.id);
    res.json(resp);
  })

  .patch('/:id', async (req, res) => {
    const resp = await Laptop.updateParticularLaptop(req.params.id);
    res.json(resp);
  })

  .delete('/:id', async (req, res) => {
    const resp = await Laptop.deleteParticularLaptop(req.params.id);
    res.json(resp);
  })
;
