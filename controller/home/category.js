const CategoryService = require('../../service/category.js')

class CategoryController {
  async index(ctx) {
    let data = await CategoryService.getCategorysByQuery()
    await ctx.render('/category/index', {
      data,
      message: ''
    })
  }
  async add(ctx) {
    console.log(ctx)
    await ctx.render('/category/add', {
      message: ''
    })
  }
  async post(ctx) {
    let data
    try {
      data = await CategoryService.newAndSave(ctx.request.body)
    } catch (error) {
      data = error
    }
    console.log(data instanceof Error)
    console.log(data.message)
    await data instanceof Error ? ctx.redirect('/category/add', {
      message: data.message
    }) : ctx.redirect('/category')
  }
  async edit(ctx) {
    
  }
}

module.exports = new CategoryController()