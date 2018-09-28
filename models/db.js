const mongoose = require('mongoose')
const uri = `mongodb://localhost:27017/mongoosemovie`

const db = mongoose.connect(uri)

module.exports = mongoose