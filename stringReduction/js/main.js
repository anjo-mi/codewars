function balance(left,right){
    left = left.split('').reduce((a,el) => {
      if (el === '?') a += 3
      if (el === '!') a += 2
      return a
    }, 0)
    
    right = right.split('').reduce((a,el) => {
      if (el === '?') a += 3
      if (el === '!') a += 2
      return a
    }, 0)
    
    return left > right ? 'Left' : 
           right > left ? 'Right' : 'Balance'
    
  }


console.log(balance("!!","??") , "Right")
console.log(balance("!??","?!!") , "Left")
console.log(balance("!?!!","?!?") , "Left")
console.log(balance("!!???!????","??!!?!!!!!!!") , "Balance")