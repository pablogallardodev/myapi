const express = require('express')
const {
  createDatabase,
  getAllDatabase
} = require('../controllers/dbController')
const router = express.Router()

router
  .post('/', createDatabase)
  .get('/all/:limit?', getAllDatabase)

module.exports = router