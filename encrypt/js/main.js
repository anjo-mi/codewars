var encryptThis = (text) => {
    let arr = text.split(' ')
    let word = []
    for (let i = 0 ; i < arr.length ; i++){
        word.push(arr[i].split(''))
    }
    for (let i = 0 ; i < word.length ; i++){
        let second = word[i][1]
        let last = word[i][word[i].length-1]
        word[i][1] = last
        word[i][word[i].length-1] = second
        for (let j = 0 ; j < word[i].length ; j++){
            if (j === 0){
                word[i][j] = word[i][j].charCodeAt(j).toString()
            }
        }
        word[i] = word[i].join('')
    }
    return (word.join(' '))
    

  }

  console.log(encryptThis('Hello world'))