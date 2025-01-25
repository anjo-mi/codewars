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

  function testing(actual, expected) {
    console.log(actual, expected)
}

    var a = "abcd\nefgh\nijkl\nmnop";
    var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";
    testing(scale(a, 2, 3), r);
    testing(scale("", 5, 5), "");
    testing(scale("Kj\nSH", 1, 2),"Kj\nKj\nSH\nSH");