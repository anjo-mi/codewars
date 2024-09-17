var isPP = function(n){
    if (n <= 1) return null
    
    for (let i = 2 ; i <= Math.sqrt(n) ; i ++){
      let expo = 2
      while (i ** expo <= n){
        if (i ** expo === n){
          return [i , expo]
        }
        expo++
      }
    }  
    return null;
  }


