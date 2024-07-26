const express = require('express');
const mongoose = require('mongoose');
const user = require('./model');

const app = express();
app.use(express.json()) 

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(8000, async() => {
    await mongoose.connect("mongodb://localhost:27017/learn-mongo")
    console.log("server is running on port 8000")
})  