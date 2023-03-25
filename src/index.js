const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const port = 4000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const DATABASE_URL = "mongodb://localhost:27017/subscribers10";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`Server is working, App listening on port ${port}!`))
