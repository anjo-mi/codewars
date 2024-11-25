function orderFood(list) {
    let foodOptions = list.reduce((a,el) => {
      a[el.meal] = (a[el.meal] || 0) + 1
      return a
    }, {})
    return foodOptions
  }