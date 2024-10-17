function autocomplete(word, dict){
    let arr = []
    let inputs = 'abcdefghijklmnopqrstuvwxyz'
    let lower = word.toLowerCase().split('')
    let low = lower.filter(el => inputs.includes(el)).join('')
    
    for (let i = 0 ; i < dict.length ; i++){
      if (dict[i].toLowerCase().startsWith(low)){
  //       arr.push(word + dict[i].slice(word.length))
           arr.push(dict[i])
      }
      if (arr.length === 5) break
    }
    return arr
  }