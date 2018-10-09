const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa()

app.use(bodyParser())
app.use(static(path.join(__dirname, 'public')))

const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('正在监听3000端口……')
})