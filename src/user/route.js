const express = require('express')
const USER = require('./controller')

const router = express.Router()
const controller = USER()

router.route('/')
  .get(controller.getAll)
  .post(controller.create)

router.route('/:code')
  .get(controller.getByCode)

module.exports = router
