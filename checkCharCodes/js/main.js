function solve(s){
    let capital = 0
    let lower = 0
    let nums = 0
    let specChars = 0
    for (let char of s){
      if (char.charCodeAt(0) < 91 && char.charCodeAt(0) > 64){
        capital++
      }
      else if (char.charCodeAt(0) < 123 && char.charCodeAt(0) > 96){
        lower++
      }
      else if (char.charCodeAt(0) < 58 && char.charCodeAt(0) > 47){
        nums++
      }
      else if (char.charCodeAt(0) !== 32){
        specChars++
      }
    }
    return [capital,lower,nums,specChars]
  }