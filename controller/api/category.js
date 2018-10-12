const CategoryService = require('../../service/category.js')

class CategoryController {
  async list(ctx) {
    let data = await CategoryService.getCategorysByQuery()
    ctx.body = JSON.stringify(data instanceof Error ? {
      success: false,
      msg: data.message
    } : {
      success: true,
      data,
      msg: '获取成功',
    })
  }
  async add(ctx) {
    let category = ctx.query.name ? ctx.query : ctx.request.body.name ? ctx.request.body : {}
    console.log(category)
    let data
    try {
      data = await CategoryService.newAndSave(category)
    } catch (e) {
      data = e
    }
    ctx.body = JSON.stringify(data instanceof Error ? {
      success: false,
      msg: data.message
    } : {
      success: true,
      data,
      msg: '添加成功',
    })
  }
}

module.exports = new CategoryController