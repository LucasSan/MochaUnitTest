const UserService = require('../../src/user/service')

const userService = UserService()

describe('Unit test for Users', () => {
  describe('\Success Cases - Users', () => {
    it('should return a list of users', (done) => {
      userService.list()
        .then((list) => {
          expect(list.length).toBe(5)
          done()
        })
        .catch(done)
    })

    it('should create a new user', (done) => {
      userService.create({
        id: 6,
        nome: 'Lucas 6'
      })
        .then((list) => {
          expect(list.length).toBe(6)
          done()
        })
        .catch(done)
    })

    it('should return 1 user', (done) => {
      userService.one({code: 4})
        .then((list) => {
          expect(list.length).toBe(1)
          done()
        })
        .catch(done)
    })
  })

  describe('\Fail Cases - Users', () => {
    it('should return 1 user', (done) => {
      userService.one()
        .catch((err) => {
          expect(err).toBeInstanceOf(Error)
          done()
        })
    })
  })
})
