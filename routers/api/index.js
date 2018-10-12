const router = require('koa-router')()
const category = require('./category')

router.use('/category', category.routes(), category.allowedMethods())

module.exports = router