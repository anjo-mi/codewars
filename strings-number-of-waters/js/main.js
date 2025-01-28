function hydrate(s) {
    const nums = [];
    let num = ''
    for (let i = 0; i < s.length ; i++){
      if (!isNaN(s[i])){
        num += s[i]
      }
      if (num && isNaN(s[i])){
        nums.push(+num)
        num = ''
      }
    }
    const drinks = nums.reduce((a,el) => a + el, 0)
    return `${drinks} ${drinks === 1 ? 'glass' : 'glasses'} of water`
  }


  console.log(hydrate("1 beer"), "1 glass of water");
  console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
  console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");