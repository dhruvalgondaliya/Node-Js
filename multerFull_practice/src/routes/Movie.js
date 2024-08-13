const express = require('express');
const { CreateMovie, getMovie } = require('../controller/Movie');
const { multerConfing } = require('../Confing/Multer_Confing')

const movie_Router = express.Router()

// Api Breack Point
movie_Router.get('/', getMovie)
movie_Router.post('/create', multerConfing.single('img'), CreateMovie)


module.exports = { movie_Router }