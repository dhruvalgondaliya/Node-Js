const express = require('express');
const mongoose = require('mongoose');
const { UserRoutes } = require('./src/routes/user')

const app = express();
app.use(express.json())

app.use('/users', UserRoutes)


app.listen(3030, async () => {
    await mongoose.connect('mongodb://localhost:27017/test');
    console.log('db connected');
    console.log('server runing');
})
