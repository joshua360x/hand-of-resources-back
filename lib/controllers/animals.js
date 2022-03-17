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
    console.log(req.body);
    res.json([req.body]);
  });