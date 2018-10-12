const router = require('koa-router')()

const web = require('./web')
// const api = require('./api')
// const admin = require('./admin')

router.use('/', web.routes(), web.allowedMethods())
// router.use('/admin', admin.routes(), admin.allowedMethods())
// router.use('/api', api.routes(), api.allowedMethods())

module.exports = router