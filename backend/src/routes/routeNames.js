const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json('perfeito')
})

router.post('/', (req, res) => {
  res.status(200).json('gravou')
})


module.exports = router