const express = require('express')
const api = express.Router()
const auth = require('../middlewares/auth')
const userCtrl = require('../controllers/user')
const usersCtrl = require('../controllers/users')

api.get('/users', auth, usersCtrl.getUsers)
api.get('/users/:id', auth, usersCtrl.getUser)

api.post('/signup', userCtrl.signUp)
api.post('/sigin', userCtrl.signIn)

module.exports = api