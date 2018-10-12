const Koa = require('koa')
const path = require('path')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa()
const render = require('koa-ejs')

const resolve = (dir) => {
  return path.join(__dirname, dir)
}

app.use(bodyParser())
app.use(static(resolve('public')))
render(app, {
  root: resolve('views'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
})

const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('正在监听3000端口……')
})