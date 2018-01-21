const express = require('express')
const router = express.Router()

router.get('/health', (req, res) => {
  res.sendStatus(200)
})

module.exports = router
