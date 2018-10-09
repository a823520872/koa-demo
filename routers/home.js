const router = require('koa-router')()

router
  .get('/', async (ctx) => {
    let html = `
      <ul>
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="/add">发表文章</a>
        </li>
        <li>
          <a href="/hello/world">hello</a>
        </li>
      </ul>
    `
    ctx.body = html
  })

module.exports = router