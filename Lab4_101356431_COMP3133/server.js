const mongoose = require('mongoose')
const express = require('express')
const userRouter = require('./routes/userRoutes.js');

const app = express()
const DB_CONNECTION_STRING = "mongodb+srv://admin:pass921@cluster0.ydy4wmd.mongodb.net/COMP3133?retryWrites=true&w=majority"

mongoose.connect(DB_CONNECTION_STRING, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});

app.use(express.json())
app.use(userRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})