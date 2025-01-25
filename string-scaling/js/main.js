function scale(str, k, n) {
    if (k <= 0 || n <= 0) return 'invalid scale variable'
    str = str.split('\n');
    if (str.every(el => el == '')) return ''
    let horz = str.map((el,i) => {
      el = el.split('');
      let str = '';
      el.forEach(e => {
        str += e.repeat(k)
      })
      return str
    })
    let vert = [];
    horz.forEach(el => {
      let x = n;
      while (x > 0){
        vert.push(el);
        x--
      }
    })
    return vert.join('\n')
  }