String.prototype.toJadenCase = function () {
    let str = this.split(' ')
    str = str.map(el => {
      return el.slice(0,1).toUpperCase() + el.slice(1)
    })
    return str.join(' ')
  };