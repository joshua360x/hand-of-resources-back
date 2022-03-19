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
;
