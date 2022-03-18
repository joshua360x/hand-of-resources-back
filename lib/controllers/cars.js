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
  })

  .get('/:id', async (req, res) => {
    const resp = await Car.getASpecificCar(req.params.id);
    res.json(resp);

  })
  

  .delete('/:id', async (req, res) => {
    const resp = await Car.deleteASpecificCar(req.params.id);
    res.json(resp);
  });



