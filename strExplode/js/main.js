function explode(s) {
    let str = ''
    for (let char of s){
      let input = char.repeat(+char)
      str += input
    }
    return str
  }