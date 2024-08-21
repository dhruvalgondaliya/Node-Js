const express = require('express');
const mongoose = require('mongoose');
const { UserRoute } = require("./src/Routes/user")

const app = express()

app.use('/user', UserRoute)


app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/JWTtoken')
    console.log('server is running on port 8000')
})
