const router = require('koa-router')()

router
  .get('/', async (ctx, next) => {
    let html = `
      <form method="POST" action="/api/category/add">
        <input type="text" name="name" />
        <input type="submit" value="增加"/>
      </form>
    `
    ctx.body = html
  })
  .post('/', async (ctx) => {
    ctx.body = ctx.request.body
  })

module.exports = router