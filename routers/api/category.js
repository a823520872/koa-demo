const router = require('koa-router')()
const CategoryController = require('../../controller/home/category.js')

router
.get('/', CategoryController.list)
.post('/add', CategoryController.add)

module.exports = router