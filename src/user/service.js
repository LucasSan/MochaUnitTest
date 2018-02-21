const _ = require('lodash')

const UsersService = {
  one,
  list,
  create
}

let usuarios = [{
  id: 1,
  nome: 'Lucas 1',
  status: 'active'
}, {
  id: 2,
  nome: 'Lucas 2',
  status: 'active'
}, {
  id: 3,
  nome: 'Lucas 3',
  status: 'active'
}, {
  id: 4,
  nome: 'Lucas 4',
  status: 'active'
}, {
  id: 5,
  nome: 'Lucas 5',
  status: 'active'
}]

function list (query) {
  return new Promise((resolve, reject) => {
    try {
      const activeUsers = _.filter(usuarios, (o) => {
        return o.status === 'active'
      })

      return resolve(activeUsers)
    } catch (err) {
      return reject(err)
    }
  })
}

function one (query) {
  return new Promise((resolve, reject) => {
    try {
      if (!query) {
        throw new Error('Empty query.')
      }
      const workedQuery = Object.assign({}, query)

      const usuario = _.filter(usuarios, (o) => {
        return o.id === parseInt(workedQuery.code)
      })

      return resolve(usuario)
    } catch (err) {
      return reject(err)
    }
  })
}

function create (payload) {
  return new Promise((resolve, reject) => {
    try {
      const pLoad = Object.assign({}, payload)
      pLoad.status = 'active'
      usuarios.push(pLoad)
      return resolve(usuarios)
    } catch (err) {
      return reject(err)
    }
  })
}

module.exports = function factory () {
  return UsersService
}
