class DBHelper {
  add(model, conditions) {
    return new Promise((resolve, reject) => {
      model.create(conditions, (err, doc) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        console.log(doc)
        resolve(doc)
      })
    })
  }
  edit(model, conditions, update, options = {}) {
    return new Promise((resolve, reject) => {
      model.update(conditions, update, options, (err, doc) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        console.log(doc)
        if (doc.n === 0) {
          reject(new Error('更新失败，没有这条数据'))
        } else {
          resolve(doc)
        }
      })
    })
  }
  find(model, conditions, fields, options = {}) {
    return new Promise((resolve, reject) => {
      model.find(conditions, fields, options, (err, doc) => {
        if (err) {
          console.log(err)
          reject(err)
        }
        console.log(doc)
        resolve(doc)
      })
    })
  }
}

module.exports = DBHelper