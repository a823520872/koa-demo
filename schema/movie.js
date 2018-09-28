const mongoose = require('../models/db.js')
const ActorSchema = require('./actor.js')

const MovieSchema = new mongoose.Schema({
  // id: String,
  title: {
    type: String,
    required: true
  },
  pic: String,
  director: {
    type: String,
    required: true
  },
  actor: [ActorSchema],
  date: String,
  star: String,
  keyword: String,
  url: String
})

MovieSchema.query.byTitle = function (title) {
  return this.find({title: new RegExp(title)})
}

module.exports = MovieSchema