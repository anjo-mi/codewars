function capitalize(s,arr){
    s = s.split('')
    arr.forEach(el => {
      if (el <= s.length - 1){
        s[el] = s[el].toUpperCase()
      }
    })
    return s.join('')
  };