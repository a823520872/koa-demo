const router = require('koa-router')()
const CategoryController = require('../../controller/home/category.js')

router
.get('/add', CategoryController.add)
.post('/add', CategoryController.post)
.get('/:id/edit', CategoryController.edit)
.get('/', CategoryController.index)

module.exports = router