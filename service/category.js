const CategoryModel = require('../models/category.js')

class CategoryService {
  async getCategorysByQuery(query = {}) {
    return CategoryModel.find(query).exec()
  }
  async newAndSave(category) {
    let c = new CategoryModel(category)
    return c.save()
  }
  async updateCategoryById(id, category) {
    return CategoryModel.findOneAndUpdate(id, category).exec()
  }
}

module.exports = new CategoryService