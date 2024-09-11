require('dotenv').config()

const PORT = process.env.PORT
const MONGO_URL = process.env.DATABASEURL

module.exports = {
  PORT,
  MONGO_URL
}
