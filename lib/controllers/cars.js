const { Router } = require('express');
const Car = require('../models/Car');

module.exports = Router()



  .post('/', async (req, res) => {
  // res.json({ id: '1', ...req.body });
  const resp = await Car.insert(req.body);
  res.json(resp);
})


  .get('/', async (req, res) => {
    const resp = await Car.getAllCars(req.body)
    res.json(resp);
  });

