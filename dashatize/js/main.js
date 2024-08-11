function dashatize(num) {
    num = num.toString().split('')
    if(num[0] === '-'){
      num.shift()
    }
    for (let i = 0 ; i < num.length ; i++){
      if (+num[i] % 2 === 1){
        num[i] = `-${num[i]}-`
      }
    }
    num = num.join('')
    if (num.startsWith('-')){
      num = num.slice(1)
    }
    if (num.endsWith('-')){
      num = num.slice(0, -1)
    }
    num = num.replace(/--/g,'-')
    return num
  }