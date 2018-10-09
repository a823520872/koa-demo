const mongoose = require('mongoose')
const uri = `mongodb://localhost:27017/swagger`

const db = mongoose.connect(uri)

module.exports = mongoose