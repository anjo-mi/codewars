function toNato(words) {
    words = words.toLowerCase().split('')
  //   .filter(el => el.charCodeAt(0) < 123 && el.charCodeAt(0) > 96)
    let str = ''
    let nato = {
      a : 'Alfa',
      b : 'Bravo',
      c : 'Charlie',
      d :'Delta',
      e : 'Echo',
      f : 'Foxtrot',
      g : 'Golf',
      h : 'Hotel',
      i : 'India',
      j : 'Juliett',
      k : 'Kilo',
      l : 'Lima',
      m : 'Mike',
      n : 'November',
      o : 'Oscar',
      p : 'Papa',
      q : 'Quebec',
      r : 'Romeo',
      s : 'Sierra',
      t : 'Tango',
      u : 'Uniform',
      v : 'Victor',
      w : 'Whiskey',
      x : 'Xray',
      y :'Yankee',
      z : 'Zulu'
    }
    words.forEach(el => {
      if (nato[el]){
        str += nato[el] + ' '
      }else if (el !== ' '){
        str += el + ' '
      }
    })
    return str.trim()
  }