function scrollingText(text){
    text = text.toUpperCase().split('')
    let newArr = []
    let i = 0
    while (i < text.length){
      newArr.push(text.join(''))
      let front = text.shift()
      text.push(front)
      i++
    }
    return newArr
  }


console.log(scrollingText("abc"), ["ABC","BCA","CAB"])