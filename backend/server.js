const express = require('express')
const dotenv = require('dotenv').config({path : "../backend/config/.env"})
const cors = require('cors')
const colors = require('colors')
const app = require('./app')
const connectDB = require('./config/db')
port = process.env.PORT || 4000
const url = `http://localhost:${port}`.red

connectDB()

// app.get("/", (req, res) => {
//     res.status(200).json({hello: "world"})
// })


app.listen(port, () => console.log(`Server Started on Port : ${url}`))