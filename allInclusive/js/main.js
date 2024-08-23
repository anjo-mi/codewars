function containAllRots(str, arr) {
    let compareArr = []
    str = str.split('')
    for (let i = 0 ; i < str.length ; i++){
      let front = str.shift()
      str.push(front)
      compareArr.push(str.join(''))
    }
    return compareArr.every(el => arr.includes(el))
  }