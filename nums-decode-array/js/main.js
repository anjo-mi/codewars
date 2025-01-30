function decode  (code, n) {
    const alpha = ' abcdefghijklmnopqrstuvwxyz';
    n = n.toString().split('').map(Number);
    code = code.map((el,i) => el - n[i % n.length]);
    return code.map(el => alpha[el]).join('')
  }