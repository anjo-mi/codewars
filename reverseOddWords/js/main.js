function reverse(str){
    if (str == 0) return ''
    str = str.split(' ')
    str.forEach((el,i) => {
      if (i % 2 === 1){
        str[i] = str[i].split('').reverse().join('')
      }
    })
    return str.join(' ')
  }