function doMath(str) {
    str = str.split(' ')
    for (let i = 0 ; i < str.length ; i++){
      let nums = ''
      let letter = ''
      for (let char of str[i]){
        if (isNaN(char)){
          letter += char
        }else if(!isNaN(char)){
          nums += char
        }
      }
      str[i] = letter + nums
    }
    str.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
    for (let i = 0 ; i < str.length ; i++){
      str[i] = str[i].split('')
      str[i].shift()
      str[i] = str[i].join('')
    }
    console.log(str)
    let num = str.reduce((a,el,i) => {
      console.log(a,el,i)
      if (i === 0){
        return a + +el
      }else if(i % 4 === 1){
        return a + +el
      }else if(i % 4 === 2){
        return a - +el
      }else if (i % 4 === 3){
        return a * +el
      }else if (i % 4 === 0){
        return a / +el
      }
    }, 0)
    return Math.round(num)
  }