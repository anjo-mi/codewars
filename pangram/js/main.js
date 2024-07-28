const isPangram = (string) => {
    let arr = []
    string = string.toUpperCase()
    for (let i = 65 ; i < 91 ; i++){
      arr.push(i)
    }
    let codes = []
    for (let i = 0 ; i < string.length ; i++){
      codes.push(string.charCodeAt(i))
    }
    for (let i = 0 ; i < codes.length ; i++){
        if (arr.includes(codes[i])){
            let index = arr.indexOf(codes[i])
            arr.splice(index, 1)
        }
    }
    return arr.length === 0 ? true : false
  }

  console.log(isPangram('the quick brown fox jumps over the lazy dog'))