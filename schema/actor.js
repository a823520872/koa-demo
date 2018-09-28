const mongoose = require('../models/db.js')

const ActorSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    required: true
  }
})

module.exports = ActorSchema