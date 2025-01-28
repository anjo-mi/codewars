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