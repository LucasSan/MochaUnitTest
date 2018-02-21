const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const usersRoutes = require('./user/route')
const app = express()

app.set('port', 3004)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/users', usersRoutes)

function upServer () {
  app.listen(app.get('port'), () => {
    console.log(`[foundation-microservice] => [server.js] => [upServer] => Server is running at port: ${app.get('port')}.`)
  })
}

upServer()

module.exports = app
