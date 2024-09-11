const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const notesRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
logger.info('conecting to', config.MONGO_URL)

main().catch(err => console.log(err))
async function main() {
  await mongoose.connect(config.MONGO_URL)
  logger.info('Conectado a MongoDB')
}

app.use(cors())
// app.use(express.static('dist'))
app.use(express.json())
app.use(middleware.requestLogger)

app.get('/', (req, res) => {
  res.send('Welcome to the Blog API')
})
app.use('/api/blogs', notesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
