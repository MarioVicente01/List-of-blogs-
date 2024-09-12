require('dotenv').config()

let PORT = process.env.PORT
let MONGO_URL = process.env.DATABASEURL

module.exports = {
  PORT,
  MONGO_URL
}
