function multiplyAll(arr) {
    return function (mult){
      return arr.map(num => num * mult)
    }
  }