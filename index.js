const dotenv = require('dotenv')
const express = require('express');
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const colors = require('colors')


require('dotenv').config();

const connectDB = require('./config/db.js')

connectDB()

const indexRouter = require('./routes/index')
const movieDetailRouter = require('./routes/movieDetail')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')



app.use(express.static('public'))

//localhost3000
app.use('/', indexRouter)
app.use('/movie-detail', movieDetailRouter)

const PORT = process.env.PORT || 3000

const mode = process.env.NODE_ENV

app.listen(PORT, console.log( `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))


