function makePassword(str) {
    const translate = { i: '1', o: '0', s: '5' }
    str = str.split(' ').map(el => {
      if(translate[el[0].toLowerCase()]) return translate[el[0].toLowerCase()]
      return el[0]
    })
    return str.join('')
  }

console.log(makePassword("Give me liberty or give me death"), "Gml0gmd", "Wrong output for 'Give me liberty or give me death'");
console.log(makePassword("Keep Calm and Carry On"), "KCaC0", "Wrong output for 'Keep Calm and Carry On'");