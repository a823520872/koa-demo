const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const add = require('./add')

router.use('/', home.routes(), home.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())
router.use('/add', add.routes(), add.allowedMethods())

module.exports = router