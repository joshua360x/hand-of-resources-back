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



;

