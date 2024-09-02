function stringTransformer(str) {
    str = str.split('')
    for (let i = 0 ; i < str.length ; i++){
      if (str[i] === str[i].toUpperCase()){
        str[i] = str[i].toLowerCase()
      }else if(str[i] === str[i].toLowerCase()){
        str[i] = str[i].toUpperCase()
      }
    }
    str = str.join('')
    str = str.split(' ')
    str = str.reverse().join(' ')
    return str
  }

  stringTransformer('Example string')// 'STRING eXAMPLE'