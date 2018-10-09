const CategoryService = require('../service/category.js')

class CategoryController {
  async list(ctx) {
    let data = await CategoryService.list()
    ctx.body = JSON.stringify(data instanceof Error ? {
      success: false,
      msg: data.toString()
    } : {
      success: true,
      data,
      msg: '获取成功',
    })
  }
  async add(ctx) {
    let data = await CategoryService.add(ctx.query || ctx.request.body)
    ctx.body = JSON.stringify(data instanceof Error ? {
      success: false,
      msg: data.toString()
    } : {
      success: true,
      data,
      msg: '添加成功',
    })
  }
}

module.exports = new CategoryController