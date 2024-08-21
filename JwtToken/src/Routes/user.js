const express = require('express');
const UserRoute = express.Router()
const { userRegistration } = require('../Controller/User')

// Api Breack Point
UserRoute.post('/registration', userRegistration)



module.exports={UserRoute}
