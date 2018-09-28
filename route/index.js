const Router = require('koa-router')

let router = new Router()

router.get('/', async (ctx) => {
  let html = `
  <ul>
    <li>
      <a href="/">首页</a>
    </li>
    <li>
      <a href="/post">发表文章</a>
    </li>
  </ul>
`
  ctx.body = html
}).get('/post', async (ctx) => {
  let html = `
    <form method="POST" action="/post">
      <input type="text" name="title" />
      <input type="submit" value="发表"/>
    </form>
  `
  ctx.body = html
}).post('/post', async (ctx) => {
  ctx.body = ctx.request.body
}).all('*', async (ctx) => {
  let json = JSON.stringify({
    url: ctx.url,
    query: ctx.query
  })
  ctx.body = json
})

module.exports = router