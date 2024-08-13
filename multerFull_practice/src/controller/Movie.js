const { Movie } = require('../model/Movie')
// const fs = require('fs')
// const path = require('path')


// getMovie
const getMovie = async (req, res) => {
    const movie = await Movie.find()
    res.json({
        movie: movie
    })
}


// create Movie
const CreateMovie = async (req, res) => {
    const req_body = req.body
    const MovieImg = req.file['filename']

    const movieName = req_body['movieName']
    const director = req_body['director']
    const releaseYear = req_body['releaseYear']

    await Movie.create({ movieName, director, releaseYear, MovieImg })

    res.json({
        message: 'Movie created successfully',
    })
}

module.exports = { getMovie, CreateMovie }