const express = require('express')
const { createDatabase } = require('../controllers/dbController')
const router = express.Router()

router
  .post('/', createDatabase)

module.exports = router