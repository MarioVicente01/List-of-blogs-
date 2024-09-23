const express = require('express')
const cors = require('cors')
// const express = require('express')
require('express-async-errors')
const app = express()
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const blogsRouter = require('../src/controllers/blogs')
const config = require('../src/utils/config')
const logger = require('../src/utils/logger')
const middleware = require('./utils/middleware')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGO_URL)

mongoose.connect(config.MONGO_URL)

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
