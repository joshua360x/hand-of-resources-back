const { Router } = require('express');

module.exports = Router().


  post('/', async (req, res) => {
    console.log(req.body);
    res.json({ id: '1', ...req.body });
  });
