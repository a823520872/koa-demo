const https = require('https')
const cheerio = require('cheerio')
// const mongoose = require('mongoose')
// const MovieSchema = require('../schema/movie.js')

// const Movie = mongoose.model('movie', MovieSchema)

// let movie = new Movie({
//   title: '肖申克的救赎',
//   director: '弗兰克·德拉邦特',
//   actor: [{
//     id: '1054521',
//     name: '蒂姆·罗宾斯'
//   }]
// })

// movie.save((err, doc) => {
//   console.log(doc)
// })

// Movie.find().byTitle('的救赎').exec(function (err, docs) {
//   console.log(docs)
// })

class MovieData {
  getData() {
    return new Promise((resolve, reject) => {
      https.get('https://movie.douban.com${url}', data => {
        let html = []

        data.on('data', (chunk) => {
          html.push(chunk)
        })

        data.on('end', () => {
          resolve(html.join(''))
        })
      }).on('error', e => {
        reject(e)
      })
    })
  }
  async getList() {
    try {
      let html = await this.getData('/top250')
      let $ = cheerio.load(html)
      let data = []
      console.log($('.grid_view').children().length)
      $('.grid_view .item').each((idx, el) => {
        let $el = $(el)
        let item = {
          title: $el.find('.title').eq(0).text(),
          start: $el.find('.rating_num').text(),
          keyword: $el.find('.inq').text(),
          url: $el.find('.hd a').prop('href')
        }
        console.log(item)
        data.push(item)
      })
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}

(function () {
  let movie = new MovieData()
  movie.getList()
})()