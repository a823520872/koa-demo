const CategoryModel = require('../models/category.js')

class CategoryService {
  async getCategoryByQuery(query = {}) {
    return CategoryModel.find(query).exec()
  }
  async newAndSave(category) {
    let c = new CategoryModel(category)
    return c.save()
  }
}

module.exports = new CategoryService