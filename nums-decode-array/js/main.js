function decode  (code, n) {
    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    n = n.toString().split('').map(Number);
    code = code.map((el,i) => el - n[i % n.length]);
    return code.map(el => alpha[el]).join('')
  }

  console.log( decode([ 20, 12, 18, 30, 21], 1939), "scout" );
  console.log( decode([ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939) , "masterpiece");