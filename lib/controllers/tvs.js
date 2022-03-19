const { Router } = require('express');
const TV = require('../models/TV');


module.exports = Router()
  .post('/', async (req, res) => {
    const resp = await TV.insert(req.body);
    res.json(resp);
  })

  .get('/', async (req, res) => {
    const resp = await TV.getAllTvs();
    res.json(resp);
  })

  .get('/:id', async (req, res) => {
    const resp = await TV.getAParticularTV(req.params.id);
    res.json(resp);
  })

  .patch('/:id', async (req, res) => {
    const resp = await TV.updateAParticularTV(req.params.id);
    res.json(resp);
  })

  .delete('/:id', async (req, res) => {
    const resp = await TV.deleteAParticularTV(req.params.id);
    res.json(resp);
  });
