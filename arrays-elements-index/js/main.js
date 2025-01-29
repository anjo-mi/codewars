function nthChar(words){
    return words.reduce((a,el,i) => {
      a.push(el[i])
      return a
    } ,[]).join('')
  }