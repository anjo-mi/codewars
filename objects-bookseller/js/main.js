function stockList(books, categories) {
    let str = ''
    if (books.length == 0 || categories.length == 0) return str
    if (Array.isArray(books)){
      books = Object.fromEntries(
        books.map(el => {
          let [front,num] = el.split(' ')
          return [front, parseInt(num,10)]
        }))
    }
    if (Array.isArray(categories)){
      categories = Object.fromEntries(
        categories.map(el => [el,+0]))
    }
    for (let key in books){
      for (let cat in categories){
        if (cat.toUpperCase() === key[0].toUpperCase()){
          categories[cat] = (categories[cat] || 0) + parseInt(books[key],10)
        }
      }
    }
    console.log(categories)
    let arr = []
    for (let key in categories){
      arr.push(`(${key} : ${categories[key]})`)
    }
    return arr.join(' - ')
  }


  