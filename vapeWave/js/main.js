function vaporcode(str) {
    let vapeStr = ''
    for (let char of str){
      if (char !== ' '){
        vapeStr += char.toUpperCase() +'  '
        }
    }
    return vapeStr.trim()
  }