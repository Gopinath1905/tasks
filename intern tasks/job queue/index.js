const express = require('express');
const { appendFile } = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/route')

require('dotenv').config();

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(3401,()=>{
    console.log("server connected successfully...")
})

mongoose.connect(process.env.DB_URI,(err) =>{
    if (err) return console.log("Error: ", err);
        console.log("DB connected successfully...")
})