const express = require('express');
const { userRegistration, } = require('../controller/user');


const UserRoutes = express.Router()


UserRoutes.post('/register', userRegistration)

module.exports = { UserRoutes }