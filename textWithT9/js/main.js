function presses(phrase) {
    let total = 0
    let obj = {
      1: 'adgjmptw #*1',
      2: 'behknqux0',
      3: 'cfilorvy',
      4: 'sz234568',
      5: '79'
    }
    phrase = phrase.toLowerCase()
    for (let char of phrase){
      for (let key in obj){
        if (obj[key].includes(char)){
          total += +key
        }
      }
    }
    return total
  }