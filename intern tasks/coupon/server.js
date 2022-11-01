require ('dotenv').config();
const express = require ("express");
const mongoose = require ("mongoose");
const router = require("../coupon/routers/router");


const app = express();


app.listen(3333, () => {
    console.log("Server connected on 3333");
});

app.use('/', router);
mongoose.connect(process.env.MONGODB,
    (err) => {
    if (err) return console.log("Error: ", err);
    console.log("MongoDB Connected")
});