const USER = require('./service')

const userService = USER()

const UsersController = {
  getAll,
  getByCode,
  create
}

function getAll (req, res) {
  const { query } = Object.assign({}, req)

  userService.list(query)
    .then((result) => {
      if (!result) {
        return res.status(404).send({ service: 'user', msg: 'Users not found' })
      }
      return res.status(200).send(result)
    })
    .catch(() => {
      res.status(500).send({ service: 'user', msg: 'Server error.' })
    })
}

function getByCode (req, res) {
  const { code } = Object.assign({}, req.params)

  userService.one({ code })
    .then((result) => {
      if (!result) {
        return res.status(404).send({ service: 'user', msg: 'User not found' })
      }
      return res.status(200).send(result)
    })
    .catch(() => {
      res.status(500).send({ service: 'user', msg: 'Server error.' })
    })
}

function create (req, res) {
  const { body } = Object.assign({}, req)

  userService.create(body)
    .then(result =>
      res.status(201).send(result))
    .catch(() => {
      res.status(500).send({ service: 'user', msg: 'Server error.' })
    })
}

module.exports = function factory () {
  return UsersController
}
