const { Router } = require('express');
const Bike = require('../models/Bike');

module.exports = Router()
  .post('/', async (req, res) => {
    const resp = await Bike.insert(req.body);
    res.json(resp);
  })

  .get('/', async (req, res) => {
    const resp = await Bike.getAllBikes();
    res.json(resp);
  })

  .get('/:id', async (req, res) => {
    const resp = await Bike.getAParticularBike(req.params.id);
    res.json(resp);
  })

  .patch('/:id', async (req, res) => {
    const resp = await Bike.updateAParticularBike(req.params.id);
    res.json(resp);
  })

  .delete('/:id', async (req, res) => {
    const resp = await Bike.deleteAParticularBike(req.params.id);
    res.json(resp);
  });
