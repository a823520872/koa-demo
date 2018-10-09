// const mongoose = require('mongoose')
// const CategorySchema = require('../schema/category.js')
const mongoose = require('./db.js')
const DBHelper = require('./dbHelper.js')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
  // id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  }
})

const Category = mongoose.model('category', CategorySchema)

class CategoryModel extends DBHelper {
  list() {
    return super.find(Category, {}, { __v: 0})
  }
  add(category) {
    return super.add(Category, category)
  }
}

module.exports = new CategoryModel