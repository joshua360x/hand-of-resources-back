const { Router } = require('express');





module.exports = Router()

.post('/', async (req, res) => {
  res.json({ id: '1', ...req.body });
})





