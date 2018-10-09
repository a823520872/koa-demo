const router = require('koa-router')()
const CategoryController = require('../controller/category.js')

module.exports = router
  .get('/category', CategoryController.list)
  .post('/category/add', CategoryController.add)