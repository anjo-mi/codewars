function capitalize(s,arr){
    s = s.split('')
    for (let i = 0 ; i < s.length ; i++){
      if (arr.includes(i)){
        s[i] = s[i].toUpperCase()
      }
    }
    return s.join('')
  };