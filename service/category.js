const CategoryModel = require('../models/category.js')

class CategoryService {
  async list() {
    try {
      let data = await CategoryModel.list()
      return data
    } catch (e) {
      return e
    }
  }
  async add(category) {
    try {
      let data = await CategoryModel.add(category)
      return data
    } catch (e) {
      return e
    }
  }
}

module.exports = new CategoryService